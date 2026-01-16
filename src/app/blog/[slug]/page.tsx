"use client";

import React from 'react';
import { useParams, notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import AppleDock from '@/components/AppleDock';
import MacOSWindow from '@/components/MacOSWindow';
import { FaArrowLeft, FaClock, FaCalendar } from 'react-icons/fa';

// Blog post content interface
interface BlogPostContent {
    title: string;
    date: string;
    readTime: number;
    categories: string[];
    featuredImage: string;
    content: React.ReactNode;
}

// Full blog post contents
const blogPosts: Record<string, BlogPostContent> = {
    "ai-llm-engineering": {
        title: "AI LLM Engineering: Building Production-Ready Language Model Applications",
        date: "January 15, 2026",
        readTime: 18,
        categories: ["AI/ML", "LLM", "Engineering", "Python"],
        featuredImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        content: (
            <div className="prose prose-lg dark:prose-invert max-w-none">
                <h2 className="text-2xl font-bold mt-8 mb-4">Introduction to LLM Engineering</h2>
                <p>Large Language Models (LLMs) have revolutionized how we build AI applications. From ChatGPT to Claude, these models demonstrate remarkable capabilities in understanding and generating human-like text. This guide covers the essential aspects of building production-ready LLM applications.</p>

                <h2 className="text-2xl font-bold mt-8 mb-4">1. Understanding LLM Architectures</h2>
                <h3 className="text-xl font-semibold mt-6 mb-3">Transformer Architecture</h3>
                <p>The Transformer architecture, introduced in "Attention Is All You Need" (2017), forms the backbone of modern LLMs:</p>
                <ul className="list-disc pl-6 my-4">
                    <li><strong>Self-Attention Mechanism:</strong> Allows the model to weigh the importance of different parts of the input</li>
                    <li><strong>Multi-Head Attention:</strong> Enables parallel attention computations for different representation subspaces</li>
                    <li><strong>Positional Encoding:</strong> Injects sequence order information into the model</li>
                    <li><strong>Feed-Forward Networks:</strong> Applies non-linear transformations to attention outputs</li>
                </ul>

                <h3 className="text-xl font-semibold mt-6 mb-3">Key Model Families</h3>
                <ul className="list-disc pl-6 my-4">
                    <li><strong>GPT Series (OpenAI):</strong> Decoder-only, autoregressive models optimized for generation</li>
                    <li><strong>Claude (Anthropic):</strong> Constitutional AI with strong safety alignment</li>
                    <li><strong>Gemini (Google):</strong> Multimodal capabilities with efficient reasoning</li>
                    <li><strong>LLaMA (Meta):</strong> Open-weight models for research and customization</li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4">2. Prompt Engineering Best Practices</h2>
                <h3 className="text-xl font-semibold mt-6 mb-3">Prompt Design Principles</h3>
                <pre className="bg-gray-800 text-green-400 p-4 rounded-lg overflow-x-auto my-4">
                    {`# System prompt template
SYSTEM_PROMPT = """
You are an expert {domain} assistant.

## Your Capabilities:
- {capability_1}
- {capability_2}

## Guidelines:
1. Always provide accurate, well-researched information
2. Cite sources when making factual claims
3. Acknowledge uncertainty when appropriate

## Output Format:
{output_format_specification}
"""

# Few-shot prompting example
FEW_SHOT_PROMPT = """
Task: Classify the sentiment of the following text.

Example 1:
Text: "This product exceeded my expectations!"
Sentiment: Positive

Example 2:
Text: "Terrible customer service, never buying again."
Sentiment: Negative

Now classify:
Text: "{user_input}"
Sentiment:
"""`}
                </pre>

                <h3 className="text-xl font-semibold mt-6 mb-3">Chain-of-Thought (CoT) Prompting</h3>
                <p>CoT prompting improves reasoning by asking the model to show its work:</p>
                <pre className="bg-gray-800 text-green-400 p-4 rounded-lg overflow-x-auto my-4">
                    {`COT_PROMPT = """
Solve this problem step by step:

Problem: {problem}

Let's think through this carefully:
1. First, identify what we know...
2. Then, consider the relationships...
3. Finally, calculate the answer...

Show your reasoning at each step.
"""`}
                </pre>

                <h2 className="text-2xl font-bold mt-8 mb-4">3. Retrieval-Augmented Generation (RAG)</h2>
                <p>RAG combines the power of LLMs with external knowledge retrieval:</p>

                <h3 className="text-xl font-semibold mt-6 mb-3">RAG Architecture Components</h3>
                <pre className="bg-gray-800 text-green-400 p-4 rounded-lg overflow-x-auto my-4">
                    {`from langchain.embeddings import OpenAIEmbeddings
from langchain.vectorstores import Pinecone
from langchain.chains import RetrievalQA

# 1. Document Processing
def process_documents(docs):
    text_splitter = RecursiveCharacterTextSplitter(
        chunk_size=1000,
        chunk_overlap=200
    )
    return text_splitter.split_documents(docs)

# 2. Embedding & Indexing
embeddings = OpenAIEmbeddings()
vectorstore = Pinecone.from_documents(
    chunks, 
    embeddings, 
    index_name="knowledge-base"
)

# 3. Retrieval Chain
qa_chain = RetrievalQA.from_chain_type(
    llm=ChatOpenAI(model="gpt-4"),
    retriever=vectorstore.as_retriever(k=5),
    return_source_documents=True
)`}
                </pre>

                <h2 className="text-2xl font-bold mt-8 mb-4">4. Fine-Tuning Strategies</h2>
                <h3 className="text-xl font-semibold mt-6 mb-3">When to Fine-Tune</h3>
                <ul className="list-disc pl-6 my-4">
                    <li>Domain-specific terminology or knowledge</li>
                    <li>Consistent output formatting requirements</li>
                    <li>Specialized tasks where prompting falls short</li>
                    <li>Cost optimization for high-volume use cases</li>
                </ul>

                <h3 className="text-xl font-semibold mt-6 mb-3">Parameter-Efficient Fine-Tuning (PEFT)</h3>
                <pre className="bg-gray-800 text-green-400 p-4 rounded-lg overflow-x-auto my-4">
                    {`from peft import LoraConfig, get_peft_model
from transformers import AutoModelForCausalLM

# LoRA Configuration
lora_config = LoraConfig(
    r=16,                    # Rank
    lora_alpha=32,           # Scaling factor
    target_modules=["q_proj", "v_proj"],
    lora_dropout=0.1,
    bias="none",
    task_type="CAUSAL_LM"
)

# Apply LoRA to base model
model = AutoModelForCausalLM.from_pretrained("meta-llama/Llama-2-7b")
peft_model = get_peft_model(model, lora_config)

# Only ~0.1% of parameters are trainable!
print(f"Trainable params: {peft_model.num_parameters(only_trainable=True)}")`}
                </pre>

                <h2 className="text-2xl font-bold mt-8 mb-4">5. Evaluation Metrics</h2>
                <table className="w-full border-collapse my-4">
                    <thead>
                        <tr className="bg-gray-700">
                            <th className="border border-gray-600 p-3 text-left">Metric</th>
                            <th className="border border-gray-600 p-3 text-left">Use Case</th>
                            <th className="border border-gray-600 p-3 text-left">Range</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border border-gray-600 p-3">BLEU</td>
                            <td className="border border-gray-600 p-3">Translation, Summarization</td>
                            <td className="border border-gray-600 p-3">0-100</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-600 p-3">ROUGE</td>
                            <td className="border border-gray-600 p-3">Summarization</td>
                            <td className="border border-gray-600 p-3">0-1</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-600 p-3">Perplexity</td>
                            <td className="border border-gray-600 p-3">Language Modeling</td>
                            <td className="border border-gray-600 p-3">1-∞ (lower is better)</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-600 p-3">Human Eval</td>
                            <td className="border border-gray-600 p-3">Code Generation</td>
                            <td className="border border-gray-600 p-3">0-100%</td>
                        </tr>
                    </tbody>
                </table>

                <h2 className="text-2xl font-bold mt-8 mb-4">6. Production Deployment</h2>
                <h3 className="text-xl font-semibold mt-6 mb-3">Deployment Architecture</h3>
                <pre className="bg-gray-800 text-green-400 p-4 rounded-lg overflow-x-auto my-4">
                    {`# FastAPI Production Server
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import asyncio

app = FastAPI()

class ChatRequest(BaseModel):
    message: str
    conversation_id: str
    max_tokens: int = 1000

@app.post("/chat")
async def chat(request: ChatRequest):
    try:
        # Rate limiting
        await rate_limiter.check(request.conversation_id)
        
        # Generate response with timeout
        response = await asyncio.wait_for(
            llm.generate(request.message),
            timeout=30.0
        )
        
        # Log for monitoring
        await log_interaction(request, response)
        
        return {"response": response}
    except asyncio.TimeoutError:
        raise HTTPException(504, "Generation timeout")
    except RateLimitExceeded:
        raise HTTPException(429, "Rate limit exceeded")`}
                </pre>

                <h2 className="text-2xl font-bold mt-8 mb-4">Conclusion</h2>
                <p>Building production-ready LLM applications requires a deep understanding of model architectures, prompt engineering, RAG systems, and deployment best practices. As the field evolves rapidly, staying updated with the latest techniques and tools is essential for success.</p>

                <div className="bg-blue-900/30 border border-blue-700 rounded-lg p-4 mt-8">
                    <h4 className="font-bold text-blue-300">Key Takeaways</h4>
                    <ul className="list-disc pl-6 mt-2">
                        <li>Choose the right model for your use case</li>
                        <li>Master prompt engineering before considering fine-tuning</li>
                        <li>Implement RAG for knowledge-intensive applications</li>
                        <li>Use PEFT techniques for cost-effective fine-tuning</li>
                        <li>Deploy with proper monitoring, rate limiting, and error handling</li>
                    </ul>
                </div>
            </div>
        )
    },

    "ocr-systems-guide": {
        title: "Building Robust OCR Systems: From Theory to Production",
        date: "January 10, 2026",
        readTime: 15,
        categories: ["Computer Vision", "OCR", "Deep Learning", "Python"],
        featuredImage: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        content: (
            <div className="prose prose-lg dark:prose-invert max-w-none">
                <h2 className="text-2xl font-bold mt-8 mb-4">Introduction to OCR</h2>
                <p>Optical Character Recognition (OCR) is the technology that converts different types of documents—scanned paper documents, PDF files, or images captured by a digital camera—into editable and searchable data. This comprehensive guide covers everything from basic concepts to building production-grade OCR systems.</p>

                <h2 className="text-2xl font-bold mt-8 mb-4">1. OCR Pipeline Overview</h2>
                <p>A complete OCR pipeline consists of several stages:</p>
                <ol className="list-decimal pl-6 my-4">
                    <li><strong>Image Acquisition:</strong> Capturing or loading the input image</li>
                    <li><strong>Preprocessing:</strong> Enhancing image quality for better recognition</li>
                    <li><strong>Text Detection:</strong> Locating text regions in the image</li>
                    <li><strong>Text Recognition:</strong> Converting detected regions to text</li>
                    <li><strong>Post-processing:</strong> Correcting errors and formatting output</li>
                </ol>

                <h2 className="text-2xl font-bold mt-8 mb-4">2. Image Preprocessing Techniques</h2>
                <h3 className="text-xl font-semibold mt-6 mb-3">Essential Preprocessing Steps</h3>
                <pre className="bg-gray-800 text-green-400 p-4 rounded-lg overflow-x-auto my-4">
                    {`import cv2
import numpy as np

def preprocess_for_ocr(image_path):
    # Read image
    img = cv2.imread(image_path)
    
    # Convert to grayscale
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    
    # Noise reduction
    denoised = cv2.fastNlMeansDenoising(gray, None, 10, 7, 21)
    
    # Binarization using Otsu's method
    _, binary = cv2.threshold(
        denoised, 0, 255, 
        cv2.THRESH_BINARY + cv2.THRESH_OTSU
    )
    
    # Deskewing
    coords = np.column_stack(np.where(binary > 0))
    angle = cv2.minAreaRect(coords)[-1]
    if angle < -45:
        angle = -(90 + angle)
    else:
        angle = -angle
    
    (h, w) = binary.shape[:2]
    center = (w // 2, h // 2)
    M = cv2.getRotationMatrix2D(center, angle, 1.0)
    deskewed = cv2.warpAffine(
        binary, M, (w, h), 
        flags=cv2.INTER_CUBIC,
        borderMode=cv2.BORDER_REPLICATE
    )
    
    return deskewed`}
                </pre>

                <h3 className="text-xl font-semibold mt-6 mb-3">Handling Difficult Documents</h3>
                <pre className="bg-gray-800 text-green-400 p-4 rounded-lg overflow-x-auto my-4">
                    {`def adaptive_preprocessing(image):
    """Handle varying lighting conditions"""
    gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
    
    # Adaptive thresholding for uneven lighting
    adaptive = cv2.adaptiveThreshold(
        gray, 255, 
        cv2.ADAPTIVE_THRESH_GAUSSIAN_C,
        cv2.THRESH_BINARY, 11, 2
    )
    
    # Morphological operations to clean up
    kernel = np.ones((1, 1), np.uint8)
    cleaned = cv2.morphologyEx(adaptive, cv2.MORPH_CLOSE, kernel)
    cleaned = cv2.morphologyEx(cleaned, cv2.MORPH_OPEN, kernel)
    
    return cleaned`}
                </pre>

                <h2 className="text-2xl font-bold mt-8 mb-4">3. Tesseract OCR</h2>
                <h3 className="text-xl font-semibold mt-6 mb-3">Basic Usage</h3>
                <pre className="bg-gray-800 text-green-400 p-4 rounded-lg overflow-x-auto my-4">
                    {`import pytesseract
from PIL import Image

# Basic OCR
text = pytesseract.image_to_string(Image.open('document.png'))

# With language specification
text_id = pytesseract.image_to_string(
    Image.open('document.png'), 
    lang='ind+eng'  # Indonesian + English
)

# Get detailed output with bounding boxes
data = pytesseract.image_to_data(
    Image.open('document.png'), 
    output_type=pytesseract.Output.DICT
)

# Extract structured data
for i, word in enumerate(data['text']):
    if word.strip():
        x, y, w, h = (
            data['left'][i], data['top'][i],
            data['width'][i], data['height'][i]
        )
        conf = data['conf'][i]
        print(f"Word: {word}, Confidence: {conf}%, Box: ({x},{y},{w},{h})")`}
                </pre>

                <h3 className="text-xl font-semibold mt-6 mb-3">Configuration Options</h3>
                <pre className="bg-gray-800 text-green-400 p-4 rounded-lg overflow-x-auto my-4">
                    {`# PSM (Page Segmentation Mode) options
PSM_MODES = {
    0: "Orientation and script detection only",
    1: "Automatic page segmentation with OSD",
    3: "Fully automatic page segmentation (default)",
    4: "Assume single column of text",
    6: "Assume single uniform block of text",
    7: "Treat image as single text line",
    8: "Treat image as single word",
    11: "Sparse text - find as much text as possible",
    13: "Raw line - treat image as single text line"
}

# Custom configuration
custom_config = r'--oem 3 --psm 6 -c tessedit_char_whitelist=0123456789'
numbers_only = pytesseract.image_to_string(image, config=custom_config)`}
                </pre>

                <h2 className="text-2xl font-bold mt-8 mb-4">4. Deep Learning OCR with CRNN</h2>
                <h3 className="text-xl font-semibold mt-6 mb-3">CRNN Architecture</h3>
                <p>The Convolutional Recurrent Neural Network combines CNNs for feature extraction with RNNs for sequence modeling:</p>
                <pre className="bg-gray-800 text-green-400 p-4 rounded-lg overflow-x-auto my-4">
                    {`import torch
import torch.nn as nn

class CRNN(nn.Module):
    def __init__(self, img_height, num_channels, num_classes, hidden_size=256):
        super(CRNN, self).__init__()
        
        # CNN Feature Extractor
        self.cnn = nn.Sequential(
            nn.Conv2d(num_channels, 64, 3, 1, 1), nn.ReLU(),
            nn.MaxPool2d(2, 2),
            nn.Conv2d(64, 128, 3, 1, 1), nn.ReLU(),
            nn.MaxPool2d(2, 2),
            nn.Conv2d(128, 256, 3, 1, 1), nn.BatchNorm2d(256), nn.ReLU(),
            nn.Conv2d(256, 256, 3, 1, 1), nn.ReLU(),
            nn.MaxPool2d((2, 1), (2, 1)),
            nn.Conv2d(256, 512, 3, 1, 1), nn.BatchNorm2d(512), nn.ReLU(),
            nn.Conv2d(512, 512, 3, 1, 1), nn.ReLU(),
            nn.MaxPool2d((2, 1), (2, 1)),
            nn.Conv2d(512, 512, 2, 1, 0), nn.ReLU()
        )
        
        # RNN Sequence Modeling
        self.rnn = nn.LSTM(
            512, hidden_size, 
            num_layers=2, 
            bidirectional=True,
            batch_first=True
        )
        
        # Output Layer
        self.fc = nn.Linear(hidden_size * 2, num_classes)
    
    def forward(self, x):
        # CNN features
        conv = self.cnn(x)  # [B, C, H, W]
        
        # Reshape for RNN
        b, c, h, w = conv.size()
        conv = conv.squeeze(2).permute(0, 2, 1)  # [B, W, C]
        
        # RNN
        rnn_out, _ = self.rnn(conv)  # [B, W, hidden*2]
        
        # Output
        output = self.fc(rnn_out)  # [B, W, num_classes]
        return output`}
                </pre>

                <h2 className="text-2xl font-bold mt-8 mb-4">5. Modern OCR with Transformers</h2>
                <pre className="bg-gray-800 text-green-400 p-4 rounded-lg overflow-x-auto my-4">
                    {`from transformers import TrOCRProcessor, VisionEncoderDecoderModel
from PIL import Image

# Load TrOCR model
processor = TrOCRProcessor.from_pretrained("microsoft/trocr-large-printed")
model = VisionEncoderDecoderModel.from_pretrained("microsoft/trocr-large-printed")

def ocr_with_trocr(image_path):
    image = Image.open(image_path).convert("RGB")
    
    # Process image
    pixel_values = processor(image, return_tensors="pt").pixel_values
    
    # Generate text
    generated_ids = model.generate(pixel_values, max_length=128)
    text = processor.batch_decode(generated_ids, skip_special_tokens=True)[0]
    
    return text`}
                </pre>

                <h2 className="text-2xl font-bold mt-8 mb-4">6. End-to-End OCR Pipeline</h2>
                <pre className="bg-gray-800 text-green-400 p-4 rounded-lg overflow-x-auto my-4">
                    {`class OCRPipeline:
    def __init__(self):
        self.text_detector = self._load_detector()
        self.text_recognizer = self._load_recognizer()
        self.spell_checker = SpellChecker()
    
    def process(self, image_path):
        # Load and preprocess
        image = cv2.imread(image_path)
        preprocessed = self.preprocess(image)
        
        # Detect text regions
        boxes = self.text_detector.detect(preprocessed)
        
        # Recognize text in each region
        results = []
        for box in boxes:
            cropped = self.crop_region(preprocessed, box)
            text = self.text_recognizer.recognize(cropped)
            
            # Post-process
            corrected = self.spell_checker.correct(text)
            results.append({
                'text': corrected,
                'confidence': self.text_recognizer.confidence,
                'bbox': box
            })
        
        return self.format_output(results)
    
    def preprocess(self, image):
        # Apply preprocessing pipeline
        gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
        denoised = cv2.fastNlMeansDenoising(gray)
        binary = cv2.adaptiveThreshold(
            denoised, 255, 
            cv2.ADAPTIVE_THRESH_GAUSSIAN_C,
            cv2.THRESH_BINARY, 11, 2
        )
        return binary`}
                </pre>

                <h2 className="text-2xl font-bold mt-8 mb-4">Conclusion</h2>
                <p>Building robust OCR systems requires understanding both traditional image processing techniques and modern deep learning approaches. The best results often come from combining multiple methods and careful preprocessing tailored to your specific document types.</p>

                <div className="bg-green-900/30 border border-green-700 rounded-lg p-4 mt-8">
                    <h4 className="font-bold text-green-300">Key Takeaways</h4>
                    <ul className="list-disc pl-6 mt-2">
                        <li>Preprocessing is critical for OCR accuracy</li>
                        <li>Choose the right tool: Tesseract for general use, deep learning for complex cases</li>
                        <li>Modern Transformer-based models like TrOCR achieve state-of-the-art results</li>
                        <li>Always implement post-processing for error correction</li>
                        <li>Consider document-specific optimizations for production systems</li>
                    </ul>
                </div>
            </div>
        )
    },

    "microservices-cap-theorem": {
        title: "Microservices Architecture: Understanding CAP Theorem in Distributed Systems",
        date: "January 5, 2026",
        readTime: 20,
        categories: ["Distributed Systems", "Microservices", "Architecture", "Backend"],
        featuredImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        content: (
            <div className="prose prose-lg dark:prose-invert max-w-none">
                <h2 className="text-2xl font-bold mt-8 mb-4">Introduction to the CAP Theorem</h2>
                <p>The CAP Theorem, formulated by Eric Brewer in 2000, states that a distributed system cannot simultaneously provide all three of the following guarantees: Consistency, Availability, and Partition Tolerance. Understanding CAP is essential for designing resilient microservices.</p>

                <h2 className="text-2xl font-bold mt-8 mb-4">1. Understanding CAP Components</h2>

                <h3 className="text-xl font-semibold mt-6 mb-3">Consistency (C)</h3>
                <p>Every read receives the most recent write or an error. All nodes see the same data at the same time.</p>
                <pre className="bg-gray-800 text-green-400 p-4 rounded-lg overflow-x-auto my-4">
                    {`# Strong Consistency Example
class StronglyConsistentStore:
    def write(self, key, value):
        # Write to all replicas synchronously
        for replica in self.replicas:
            response = replica.write(key, value)
            if not response.success:
                self.rollback_all(key)
                raise ConsistencyError("Failed to write to all replicas")
        return True
    
    def read(self, key):
        # Read from quorum of replicas
        responses = [r.read(key) for r in self.replicas]
        if all_same(responses):
            return responses[0]
        raise ConsistencyError("Inconsistent data across replicas")`}
                </pre>

                <h3 className="text-xl font-semibold mt-6 mb-3">Availability (A)</h3>
                <p>Every request receives a response, without guarantee that it contains the most recent write.</p>
                <pre className="bg-gray-800 text-green-400 p-4 rounded-lg overflow-x-auto my-4">
                    {`# High Availability Example
class HighlyAvailableStore:
    def write(self, key, value):
        # Write to any available replica
        for replica in self.replicas:
            try:
                return replica.write(key, value)
            except ReplicaUnavailable:
                continue
        raise AllReplicasDown()
    
    def read(self, key):
        # Read from any available replica
        for replica in self.replicas:
            try:
                return replica.read(key)
            except ReplicaUnavailable:
                continue
        raise AllReplicasDown()`}
                </pre>

                <h3 className="text-xl font-semibold mt-6 mb-3">Partition Tolerance (P)</h3>
                <p>The system continues to operate despite network partitions between nodes.</p>
                <pre className="bg-gray-800 text-green-400 p-4 rounded-lg overflow-x-auto my-4">
                    {`# Partition-Tolerant Design
class PartitionTolerantStore:
    def write(self, key, value):
        # Write to local replica first
        self.local_replica.write(key, value)
        
        # Async replication to remote replicas
        for replica in self.remote_replicas:
            self.replication_queue.enqueue({
                'replica': replica,
                'key': key,
                'value': value,
                'timestamp': time.now()
            })
        
        return True  # Return immediately
    
    def handle_partition_recovery(self):
        # Reconcile data when partition heals
        for entry in self.pending_sync:
            self.resolve_conflicts(entry)`}
                </pre>

                <h2 className="text-2xl font-bold mt-8 mb-4">2. CAP Trade-offs in Practice</h2>
                <table className="w-full border-collapse my-4">
                    <thead>
                        <tr className="bg-gray-700">
                            <th className="border border-gray-600 p-3 text-left">System Type</th>
                            <th className="border border-gray-600 p-3 text-left">Guarantees</th>
                            <th className="border border-gray-600 p-3 text-left">Examples</th>
                            <th className="border border-gray-600 p-3 text-left">Use Cases</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border border-gray-600 p-3">CP Systems</td>
                            <td className="border border-gray-600 p-3">Consistency + Partition Tolerance</td>
                            <td className="border border-gray-600 p-3">MongoDB, HBase, Redis Cluster</td>
                            <td className="border border-gray-600 p-3">Banking, Inventory</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-600 p-3">AP Systems</td>
                            <td className="border border-gray-600 p-3">Availability + Partition Tolerance</td>
                            <td className="border border-gray-600 p-3">Cassandra, DynamoDB, CouchDB</td>
                            <td className="border border-gray-600 p-3">Social Media, Shopping Carts</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-600 p-3">CA Systems</td>
                            <td className="border border-gray-600 p-3">Consistency + Availability</td>
                            <td className="border border-gray-600 p-3">Traditional RDBMS (single node)</td>
                            <td className="border border-gray-600 p-3">Non-distributed systems</td>
                        </tr>
                    </tbody>
                </table>

                <h2 className="text-2xl font-bold mt-8 mb-4">3. Consistency Patterns</h2>

                <h3 className="text-xl font-semibold mt-6 mb-3">Eventual Consistency</h3>
                <pre className="bg-gray-800 text-green-400 p-4 rounded-lg overflow-x-auto my-4">
                    {`class EventuallyConsistentService:
    def __init__(self):
        self.local_cache = {}
        self.event_bus = EventBus()
    
    async def update(self, entity_id, data):
        # Update local state immediately
        self.local_cache[entity_id] = data
        
        # Publish event for other services
        await self.event_bus.publish(
            'entity.updated',
            {
                'entity_id': entity_id,
                'data': data,
                'timestamp': time.now(),
                'version': self.get_version(entity_id)
            }
        )
        
        return data
    
    async def handle_update_event(self, event):
        # Eventually receive updates from other services
        if self.should_apply(event):
            self.local_cache[event.entity_id] = event.data
    
    def should_apply(self, event):
        # Use vector clocks or timestamps for conflict resolution
        current = self.local_cache.get(event.entity_id)
        if not current:
            return True
        return event.version > self.get_version(event.entity_id)`}
                </pre>

                <h3 className="text-xl font-semibold mt-6 mb-3">Saga Pattern for Distributed Transactions</h3>
                <pre className="bg-gray-800 text-green-400 p-4 rounded-lg overflow-x-auto my-4">
                    {`class OrderSaga:
    """
    Choreography-based Saga for order processing
    """
    
    def __init__(self):
        self.steps = [
            SagaStep('reserve_inventory', self.reserve, self.release),
            SagaStep('process_payment', self.charge, self.refund),
            SagaStep('ship_order', self.ship, self.cancel_shipment)
        ]
    
    async def execute(self, order):
        executed = []
        
        try:
            for step in self.steps:
                await step.execute(order)
                executed.append(step)
                
            return SagaResult.SUCCESS
            
        except SagaStepFailed as e:
            # Compensate in reverse order
            for step in reversed(executed):
                await step.compensate(order)
            
            return SagaResult.COMPENSATED
    
    async def reserve(self, order):
        response = await self.inventory_service.reserve(
            order.items, 
            order.id
        )
        if not response.success:
            raise SagaStepFailed("Inventory reservation failed")
    
    async def release(self, order):
        await self.inventory_service.release(order.id)`}
                </pre>

                <h2 className="text-2xl font-bold mt-8 mb-4">4. Building Resilient Microservices</h2>

                <h3 className="text-xl font-semibold mt-6 mb-3">Circuit Breaker Pattern</h3>
                <pre className="bg-gray-800 text-green-400 p-4 rounded-lg overflow-x-auto my-4">
                    {`from enum import Enum
import time

class CircuitState(Enum):
    CLOSED = "closed"
    OPEN = "open"
    HALF_OPEN = "half_open"

class CircuitBreaker:
    def __init__(self, failure_threshold=5, recovery_timeout=30):
        self.state = CircuitState.CLOSED
        self.failures = 0
        self.failure_threshold = failure_threshold
        self.recovery_timeout = recovery_timeout
        self.last_failure_time = None
    
    async def call(self, func, *args, **kwargs):
        if self.state == CircuitState.OPEN:
            if self._should_attempt_recovery():
                self.state = CircuitState.HALF_OPEN
            else:
                raise CircuitOpenError()
        
        try:
            result = await func(*args, **kwargs)
            self._on_success()
            return result
        except Exception as e:
            self._on_failure()
            raise
    
    def _on_success(self):
        self.failures = 0
        self.state = CircuitState.CLOSED
    
    def _on_failure(self):
        self.failures += 1
        self.last_failure_time = time.time()
        if self.failures >= self.failure_threshold:
            self.state = CircuitState.OPEN`}
                </pre>

                <h2 className="text-2xl font-bold mt-8 mb-4">5. Data Partitioning Strategies</h2>
                <pre className="bg-gray-800 text-green-400 p-4 rounded-lg overflow-x-auto my-4">
                    {`class ShardingStrategy:
    """
    Consistent hashing for data distribution
    """
    
    def __init__(self, nodes, virtual_nodes=150):
        self.ring = {}
        self.sorted_keys = []
        
        for node in nodes:
            for i in range(virtual_nodes):
                key = self.hash(f"{node}:{i}")
                self.ring[key] = node
        
        self.sorted_keys = sorted(self.ring.keys())
    
    def get_node(self, key):
        if not self.ring:
            return None
        
        hash_key = self.hash(key)
        
        # Binary search for the next node
        for ring_key in self.sorted_keys:
            if ring_key >= hash_key:
                return self.ring[ring_key]
        
        # Wrap around
        return self.ring[self.sorted_keys[0]]
    
    def hash(self, key):
        import hashlib
        return int(hashlib.md5(key.encode()).hexdigest(), 16)`}
                </pre>

                <h2 className="text-2xl font-bold mt-8 mb-4">Conclusion</h2>
                <p>The CAP Theorem is not about choosing two out of three, but about understanding trade-offs when partitions occur. Modern distributed systems often provide tunable consistency levels, allowing developers to make informed decisions based on their specific requirements.</p>

                <div className="bg-purple-900/30 border border-purple-700 rounded-lg p-4 mt-8">
                    <h4 className="font-bold text-purple-300">Key Takeaways</h4>
                    <ul className="list-disc pl-6 mt-2">
                        <li>Network partitions are inevitable in distributed systems</li>
                        <li>Choose CP for critical data, AP for high-traffic scenarios</li>
                        <li>Eventual consistency is often acceptable with proper conflict resolution</li>
                        <li>Use patterns like Saga, Circuit Breaker, and Consistent Hashing</li>
                        <li>Design for failure from the beginning</li>
                    </ul>
                </div>
            </div>
        )
    },

    "sre-slo-guide": {
        title: "Site Reliability Engineering: SLOs, SLIs, and Error Budgets from Google's Playbook",
        date: "January 1, 2026",
        readTime: 22,
        categories: ["SRE", "DevOps", "Reliability", "Google Cloud"],
        featuredImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        content: (
            <div className="prose prose-lg dark:prose-invert max-w-none">
                <h2 className="text-2xl font-bold mt-8 mb-4">Introduction to SRE</h2>
                <p>Site Reliability Engineering (SRE) is a discipline that incorporates aspects of software engineering and applies them to infrastructure and operations problems. As defined by Google, the primary goal is to create scalable and highly reliable software systems.</p>

                <h2 className="text-2xl font-bold mt-8 mb-4">1. The Service Level Hierarchy</h2>

                <h3 className="text-xl font-semibold mt-6 mb-3">Service Level Indicators (SLIs)</h3>
                <p>SLIs are carefully defined quantitative measures of some aspect of the level of service that is provided.</p>
                <pre className="bg-gray-800 text-green-400 p-4 rounded-lg overflow-x-auto my-4">
                    {`# Common SLI Categories and Metrics

class SLIMetrics:
    """
    Key Service Level Indicators
    """
    
    # Availability SLI
    @staticmethod
    def availability(successful_requests, total_requests):
        """
        Percentage of requests that were successful
        """
        return (successful_requests / total_requests) * 100
    
    # Latency SLI
    @staticmethod
    def latency_percentile(latencies, percentile=99):
        """
        Response time at a given percentile
        """
        import numpy as np
        return np.percentile(latencies, percentile)
    
    # Throughput SLI
    @staticmethod
    def throughput(requests, time_window_seconds):
        """
        Requests per second
        """
        return requests / time_window_seconds
    
    # Error Rate SLI
    @staticmethod
    def error_rate(errors, total_requests):
        """
        Percentage of requests that resulted in errors
        """
        return (errors / total_requests) * 100`}
                </pre>

                <h3 className="text-xl font-semibold mt-6 mb-3">Service Level Objectives (SLOs)</h3>
                <p>SLOs are target values or ranges for a service level measured by an SLI.</p>
                <pre className="bg-gray-800 text-green-400 p-4 rounded-lg overflow-x-auto my-4">
                    {`# SLO Definition Examples

SLO_DEFINITIONS = {
    "api_availability": {
        "sli": "availability",
        "target": 99.9,  # 99.9% uptime
        "window": "30d",
        "description": "99.9% of API requests should be successful"
    },
    "api_latency_p99": {
        "sli": "latency_p99",
        "target": 200,  # 200ms
        "unit": "milliseconds",
        "window": "30d",
        "description": "99% of requests should complete in under 200ms"
    },
    "api_latency_p50": {
        "sli": "latency_p50",
        "target": 50,  # 50ms
        "unit": "milliseconds",
        "window": "30d",
        "description": "50% of requests should complete in under 50ms"
    }
}

# SLO to Error Budget mapping
def calculate_allowed_downtime(slo_target, window_days):
    """
    Calculate allowed downtime based on SLO
    
    99.9% SLO over 30 days = 43.2 minutes allowed downtime
    99.99% SLO over 30 days = 4.32 minutes allowed downtime
    """
    total_minutes = window_days * 24 * 60
    error_budget_percent = 100 - slo_target
    allowed_downtime = total_minutes * (error_budget_percent / 100)
    return allowed_downtime  # in minutes`}
                </pre>

                <h3 className="text-xl font-semibold mt-6 mb-3">Service Level Agreements (SLAs)</h3>
                <p>SLAs are explicit or implicit contracts with users about the consequences of meeting or missing SLOs.</p>

                <table className="w-full border-collapse my-4">
                    <thead>
                        <tr className="bg-gray-700">
                            <th className="border border-gray-600 p-3 text-left">SLO Target</th>
                            <th className="border border-gray-600 p-3 text-left">Monthly Downtime</th>
                            <th className="border border-gray-600 p-3 text-left">Daily Downtime</th>
                            <th className="border border-gray-600 p-3 text-left">Common Use Case</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border border-gray-600 p-3">99%</td>
                            <td className="border border-gray-600 p-3">7.2 hours</td>
                            <td className="border border-gray-600 p-3">14.4 minutes</td>
                            <td className="border border-gray-600 p-3">Internal tools</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-600 p-3">99.9%</td>
                            <td className="border border-gray-600 p-3">43.2 minutes</td>
                            <td className="border border-gray-600 p-3">1.44 minutes</td>
                            <td className="border border-gray-600 p-3">Web applications</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-600 p-3">99.99%</td>
                            <td className="border border-gray-600 p-3">4.32 minutes</td>
                            <td className="border border-gray-600 p-3">8.64 seconds</td>
                            <td className="border border-gray-600 p-3">Critical infrastructure</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-600 p-3">99.999%</td>
                            <td className="border border-gray-600 p-3">26 seconds</td>
                            <td className="border border-gray-600 p-3">0.86 seconds</td>
                            <td className="border border-gray-600 p-3">Financial systems</td>
                        </tr>
                    </tbody>
                </table>

                <h2 className="text-2xl font-bold mt-8 mb-4">2. Error Budgets</h2>
                <p>Error budgets represent the acceptable amount of unreliability based on your SLO.</p>
                <pre className="bg-gray-800 text-green-400 p-4 rounded-lg overflow-x-auto my-4">
                    {`class ErrorBudget:
    def __init__(self, slo_target: float, window_days: int = 30):
        self.slo_target = slo_target
        self.window_days = window_days
        self.budget = 100 - slo_target  # e.g., 0.1% for 99.9% SLO
        
    def calculate_remaining(self, current_availability: float) -> dict:
        """
        Calculate remaining error budget
        """
        consumed = self.slo_target - current_availability
        remaining = self.budget - consumed
        
        return {
            "total_budget": self.budget,
            "consumed": max(0, consumed),
            "remaining": max(0, remaining),
            "remaining_percent": (remaining / self.budget) * 100,
            "burn_rate": consumed / self.budget,
            "is_exhausted": remaining <= 0
        }
    
    def time_to_exhaustion(self, burn_rate_per_day: float) -> float:
        """
        Calculate days until error budget is exhausted
        """
        if burn_rate_per_day <= 0:
            return float('inf')
        return self.budget / burn_rate_per_day

# Usage example
budget = ErrorBudget(slo_target=99.9, window_days=30)
status = budget.calculate_remaining(current_availability=99.85)
print(f"Error budget remaining: {status['remaining_percent']:.1f}%")`}
                </pre>

                <h2 className="text-2xl font-bold mt-8 mb-4">3. SLO-Based Alerting</h2>
                <pre className="bg-gray-800 text-green-400 p-4 rounded-lg overflow-x-auto my-4">
                    {`# Multi-window, Multi-burn-rate alerting
# Based on Google's SRE Workbook recommendations

ALERT_CONFIGS = {
    "fast_burn": {
        # Page: Consuming 2% of monthly budget in 1 hour
        "short_window": "5m",
        "long_window": "1h",
        "burn_rate_threshold": 14.4,  # 2% / (1/720) = 14.4x normal
        "severity": "page"
    },
    "slow_burn": {
        # Ticket: Consuming 5% of monthly budget in 6 hours
        "short_window": "30m",
        "long_window": "6h",
        "burn_rate_threshold": 6,  # 5% / (6/720) = 6x normal
        "severity": "ticket"
    },
    "low_burn": {
        # Log: Consuming 10% of monthly budget in 3 days
        "short_window": "6h",
        "long_window": "3d",
        "burn_rate_threshold": 1,  # Normal burn rate
        "severity": "log"
    }
}

def calculate_burn_rate(errors, requests, slo_target, window_hours):
    """
    Calculate burn rate relative to error budget consumption
    """
    error_rate = errors / requests if requests > 0 else 0
    error_budget = 1 - (slo_target / 100)
    
    # Burn rate = (current error rate) / (allowed error rate)
    burn_rate = error_rate / error_budget if error_budget > 0 else 0
    
    return burn_rate`}
                </pre>

                <h2 className="text-2xl font-bold mt-8 mb-4">4. Implementing SRE Practices</h2>

                <h3 className="text-xl font-semibold mt-6 mb-3">Monitoring and Observability</h3>
                <pre className="bg-gray-800 text-green-400 p-4 rounded-lg overflow-x-auto my-4">
                    {`from prometheus_client import Counter, Histogram, Gauge
import time

# Define metrics
REQUEST_COUNT = Counter(
    'http_requests_total',
    'Total HTTP requests',
    ['method', 'endpoint', 'status']
)

REQUEST_LATENCY = Histogram(
    'http_request_duration_seconds',
    'HTTP request latency in seconds',
    ['method', 'endpoint'],
    buckets=[.005, .01, .025, .05, .1, .25, .5, 1, 2.5, 5, 10]
)

ERROR_BUDGET_REMAINING = Gauge(
    'error_budget_remaining_percent',
    'Remaining error budget as percentage',
    ['service', 'slo_name']
)

# Middleware for automatic metrics collection
async def metrics_middleware(request, call_next):
    start_time = time.time()
    
    try:
        response = await call_next(request)
        status = response.status_code
    except Exception as e:
        status = 500
        raise
    finally:
        duration = time.time() - start_time
        
        REQUEST_COUNT.labels(
            method=request.method,
            endpoint=request.url.path,
            status=status
        ).inc()
        
        REQUEST_LATENCY.labels(
            method=request.method,
            endpoint=request.url.path
        ).observe(duration)
    
    return response`}
                </pre>

                <h3 className="text-xl font-semibold mt-6 mb-3">Incident Management</h3>
                <pre className="bg-gray-800 text-green-400 p-4 rounded-lg overflow-x-auto my-4">
                    {`class IncidentManager:
    """
    Incident lifecycle management following SRE practices
    """
    
    def __init__(self):
        self.active_incidents = {}
        self.notification_service = NotificationService()
    
    async def declare_incident(self, title: str, severity: str, affected_services: list):
        incident = Incident(
            id=self.generate_id(),
            title=title,
            severity=severity,
            affected_services=affected_services,
            status="active",
            timeline=[
                TimelineEntry(
                    timestamp=datetime.now(),
                    action="Incident declared",
                    author="system"
                )
            ]
        )
        
        self.active_incidents[incident.id] = incident
        
        # Assign roles
        incident.incident_commander = await self.assign_ic()
        incident.communications_lead = await self.assign_comm_lead()
        
        # Start communication
        await self.notification_service.broadcast(
            channel="incidents",
            message=self.format_incident_notification(incident)
        )
        
        # Create status page entry
        await self.update_status_page(incident)
        
        return incident
    
    async def run_postmortem(self, incident_id: str):
        incident = self.active_incidents[incident_id]
        
        postmortem = Postmortem(
            incident_id=incident_id,
            summary=incident.title,
            timeline=incident.timeline,
            impact=self.calculate_impact(incident),
            root_causes=[],
            action_items=[],
            lessons_learned=[]
        )
        
        return postmortem`}
                </pre>

                <h2 className="text-2xl font-bold mt-8 mb-4">5. Toil Reduction</h2>
                <p>Toil is manual, repetitive, automatable work that scales linearly with service growth.</p>

                <pre className="bg-gray-800 text-green-400 p-4 rounded-lg overflow-x-auto my-4">
                    {`# Example: Automating certificate renewal
class CertificateAutomation:
    """
    Automated certificate management to reduce toil
    """
    
    def __init__(self, cert_manager: CertManager):
        self.cert_manager = cert_manager
        self.renewal_threshold_days = 30
    
    async def check_and_renew_certificates(self):
        """
        Automatically renew certificates approaching expiration
        """
        certs = await self.cert_manager.list_certificates()
        
        for cert in certs:
            days_until_expiry = (cert.expiry - datetime.now()).days
            
            if days_until_expiry <= self.renewal_threshold_days:
                try:
                    await self.renew_certificate(cert)
                    await self.notify_success(cert)
                except RenewalError as e:
                    await self.notify_failure(cert, e)
    
    async def renew_certificate(self, cert: Certificate):
        # Request new certificate
        new_cert = await self.cert_manager.request_certificate(
            domain=cert.domain,
            type=cert.type
        )
        
        # Deploy to load balancer
        await self.deploy_certificate(new_cert)
        
        # Verify deployment
        await self.verify_certificate(new_cert)
        
        return new_cert`}
                </pre>

                <h2 className="text-2xl font-bold mt-8 mb-4">Conclusion</h2>
                <p>SRE is about finding the right balance between reliability and innovation. By defining clear SLOs, managing error budgets, and automating toil, teams can achieve sustainable reliability while maintaining velocity.</p>

                <div className="bg-orange-900/30 border border-orange-700 rounded-lg p-4 mt-8">
                    <h4 className="font-bold text-orange-300">Key Takeaways from Google's SRE Guidebooks</h4>
                    <ul className="list-disc pl-6 mt-2">
                        <li>Define SLIs that matter to users, not just internal metrics</li>
                        <li>Set SLOs that are achievable and meaningful</li>
                        <li>Use error budgets to balance reliability with feature velocity</li>
                        <li>Implement multi-window, multi-burn-rate alerting</li>
                        <li>Conduct blameless postmortems to learn from incidents</li>
                        <li>Automate toil to free engineers for strategic work</li>
                        <li>Aim for 50% of SRE time on engineering, 50% on operations</li>
                    </ul>
                </div>
            </div>
        )
    }
};

export default function BlogPost() {
    const params = useParams();
    const slug = params.slug as string;

    const post = blogPosts[slug];

    if (!post) {
        notFound();
    }

    return (
        <div className="min-h-screen">
            <main className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto pb-32">
                {/* Back Navigation */}
                <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-400 mb-6 transition-colors"
                >
                    <FaArrowLeft />
                    Back to Blog
                </Link>

                {/* Article Header */}
                <MacOSWindow title={post.title} variant="system" className="mb-8">
                    <div className="space-y-6">
                        {/* Featured Image */}
                        <div className="relative h-64 md:h-80 overflow-hidden rounded-lg">
                            <Image
                                src={post.featuredImage}
                                alt={post.title}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>

                        {/* Meta Info */}
                        <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-400">
                            <span className="flex items-center gap-2">
                                <FaCalendar />
                                {post.date}
                            </span>
                            <span className="flex items-center gap-2">
                                <FaClock />
                                {post.readTime} min read
                            </span>
                        </div>

                        {/* Categories */}
                        <div className="flex flex-wrap gap-2">
                            {post.categories.map((category) => (
                                <span
                                    key={category}
                                    className="px-3 py-1 text-xs font-medium bg-blue-900/50 text-blue-300 rounded-full"
                                >
                                    {category}
                                </span>
                            ))}
                        </div>

                        {/* Title */}
                        <h1 className="text-3xl md:text-4xl font-bold text-white">
                            {post.title}
                        </h1>
                    </div>
                </MacOSWindow>

                {/* Article Content */}
                <MacOSWindow title="Content" variant="system">
                    <article className="text-neutral-200">
                        {post.content}
                    </article>
                </MacOSWindow>
            </main>

            <AppleDock />
        </div>
    );
}
