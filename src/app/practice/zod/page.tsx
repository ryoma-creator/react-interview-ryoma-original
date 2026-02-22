import ZodOnlyForm from "@/components/practice zod/ZodOnlyForm";

export default function ZodPracticePage() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "1rem" }}>
        🛡️ Zod + Form 練習ページ
      </h1>

      {/* ここにコンポーネントを差し替えて練習する（黒板スタイル） */}
      <ZodOnlyForm />
    </div>
  );
}
