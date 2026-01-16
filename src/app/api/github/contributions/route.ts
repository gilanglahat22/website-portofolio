import { NextResponse } from 'next/server';

const GITHUB_USERNAME = "gilanglahat22";

interface ContributionDay {
    date: string;
    count: number;
    level: 0 | 1 | 2 | 3 | 4;
}

export async function GET() {
    try {
        // Fetch the contributions page from GitHub
        const response = await fetch(
            `https://github.com/users/${GITHUB_USERNAME}/contributions`,
            {
                headers: {
                    'Accept': 'text/html',
                    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36'
                },
                next: { revalidate: 3600 } // Cache for 1 hour
            }
        );

        if (!response.ok) {
            throw new Error('Failed to fetch contributions');
        }

        const html = await response.text();

        // Parse contribution data from HTML
        const days: ContributionDay[] = [];
        let total = 0;

        // Try to extract total from the heading text
        const totalMatch = html.match(/(\d[\d,]*)\s*contributions?\s+in\s+the\s+last\s+year/i);
        if (totalMatch) {
            total = parseInt(totalMatch[1].replace(/,/g, ''));
        }

        // Parse contribution cells - GitHub uses data-date and data-level attributes
        // Pattern for newer GitHub format
        const cellPattern = /data-date="(\d{4}-\d{2}-\d{2})"[^>]*data-level="(\d)"/g;
        let match;

        while ((match = cellPattern.exec(html)) !== null) {
            const date = match[1];
            const level = parseInt(match[2]) as 0 | 1 | 2 | 3 | 4;

            // Estimate contribution count based on level
            let count = 0;
            switch (level) {
                case 1: count = 1 + Math.floor(Math.random() * 2); break; // 1-2
                case 2: count = 3 + Math.floor(Math.random() * 3); break; // 3-5
                case 3: count = 6 + Math.floor(Math.random() * 4); break; // 6-9
                case 4: count = 10 + Math.floor(Math.random() * 5); break; // 10-14
            }

            days.push({ date, count, level });
        }

        // If we couldn't parse individual cells but have a total, generate approximation
        if (days.length === 0 && total > 0) {
            const endDate = new Date();
            const startDate = new Date();
            startDate.setFullYear(startDate.getFullYear() - 1);

            // Distribute contributions based on the total
            const avgPerDay = total / 365;
            let remaining = total;

            for (let d = new Date(startDate); d <= endDate; d.setDate(d.getDate() + 1)) {
                const dateStr = d.toISOString().split('T')[0];

                // Random distribution weighted toward recent dates
                const daysFromEnd = Math.floor((endDate.getTime() - d.getTime()) / (1000 * 60 * 60 * 24));
                const weight = 1 + (365 - daysFromEnd) / 365; // More weight for recent days

                let count = 0;
                let level: 0 | 1 | 2 | 3 | 4 = 0;

                if (Math.random() < (avgPerDay / 3) * weight && remaining > 0) {
                    count = Math.min(remaining, Math.floor(Math.random() * 8) + 1);
                    remaining -= count;

                    if (count >= 10) level = 4;
                    else if (count >= 6) level = 3;
                    else if (count >= 3) level = 2;
                    else if (count >= 1) level = 1;
                }

                days.push({ date: dateStr, count, level });
            }
        }

        // Sort by date
        days.sort((a, b) => a.date.localeCompare(b.date));

        return NextResponse.json({
            total,
            days,
            lastUpdated: new Date().toISOString()
        });
    } catch (error) {
        console.error('Error fetching GitHub contributions:', error);
        return NextResponse.json(
            { error: 'Failed to fetch contributions', total: 0, days: [] },
            { status: 500 }
        );
    }
}
