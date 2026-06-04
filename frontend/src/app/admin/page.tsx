"use client";

import { useState } from "react";
import { api } from "@/lib/api";

export default function AdminPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const activatePro = async () => {
    try {
      const result = await api.activateProAdmin({
        email,
      });

      setMessage(
        `${result.email} upgraded to PRO successfully`
      );
    } catch (error: any) {
      setMessage(error.message || "Error");
    }
  };

  return (
    <main className="max-w-2xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6">
        Admin Panel
      </h1>

      <input
        type="email"
        placeholder="customer@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-3 w-full rounded mb-4 text-black"
      />

      <button
        onClick={activatePro}
        className="bg-blue-600 text-white px-6 py-3 rounded"
      >
        Activate Pro
      </button>

      {message && (
        <p className="mt-4">{message}</p>
      )}
    </main>
  );
}