"use client";
import FormSendData from "@/components/SendDataForm";
import MacOSWindow from "@/components/MacOSWindow";
export default function RegistrationPage() {
  return (
    <main className="legacy-form max-w-5xl mx-auto px-4 py-10">
      <MacOSWindow title="Registration form">
        <FormSendData />
      </MacOSWindow>
    </main>
  );
}
