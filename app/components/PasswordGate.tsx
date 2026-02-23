"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { verifyDgenPassword } from "../actions/dgen-auth";

export default function PasswordGate() {
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState(false);
  const [pending, setPending] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setPending(true);
    const result = await verifyDgenPassword(password);
    setPending(false);

    if (result.success) {
      router.refresh();
    } else {
      setIsError(true);
      setPassword("");
      inputRef.current?.focus();
    }
  }

  function handleCancel() {
    setPassword("");
    setIsError(false);
    inputRef.current?.focus();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-9 w-full max-w-[468px] pt-[120px]"
    >
      {/* Header */}
      <div className="flex flex-col gap-2 text-base text-black">
        <p className="font-sans font-bold leading-[1.3]">Enter Password</p>
        <p className="font-sans leading-[1.3]">
          This case study includes protected content.<br />
          Curious? Feel free to
            <a
                href="mailto:dkimh9@gmail.com"
                className="font-sans text-[#8a8a8a] text-base leading-[1.3] hover:text-hoverblue transition-colors"
            >
              {" "}
               email me
            </a>
        </p>
      </div>
      
      {/* Input + buttons */}
      <div className="flex flex-col gap-[15px]">
        {/* Underline input */}
        <div className="relative h-10">
          <input
              ref={inputRef}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder={isError ? "re-enter password" : "password"}
            autoComplete="current-password"
            className="absolute inset-0 w-full h-full bg-transparent border-none outline-none font-sans text-base text-black placeholder-[#8a8a8a]"
          />
          <svg
            className="absolute bottom-0 left-0 right-0"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 468 1"
          >
            <line
              stroke={isError ? "#ff0000" : "#000000"}
              x2="468"
              y1="0.5"
              y2="0.5"
            />
          </svg>
        </div>

        {/* Cancel / Submit */}
        <div className="flex items-center justify-between">
          <button
            type="button"
            onClick={handleCancel}
            className="group relative px-3 py-1.5 cursor-pointer"
          >
            <div className="absolute inset-0 border border-black group-hover:bg-black transition-colors duration-200" />
            <span className="relative font-sans text-base text-black group-hover:text-white transition-colors duration-200">
              cancel
            </span>
          </button>

          <button
            type="submit"
            disabled={pending}
            className="group relative px-3 py-1.5 cursor-pointer disabled:opacity-50"
          >
            <div className="absolute inset-0 border border-black group-hover:bg-black transition-colors duration-200" />
            <span className="relative font-sans text-base text-black group-hover:text-white transition-colors duration-200">
              submit{" "}
              <span className="group-hover:hidden">(🫣)</span>
              <span className="hidden group-hover:inline">(👀)</span>
            </span>
          </button>
        </div>
      </div>
    </form>
  );
}