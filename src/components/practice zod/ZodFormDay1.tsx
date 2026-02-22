"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// ============================================
// 📝 Zod + React Hook Form 練習 - Day 1
// テーマ: zodResolver を使ったフォームバリデーション
// ============================================

// ── Step 1: Zodスキーマを定義 ──
// 条件:
// - name: 2文字以上、50文字以下
// - email: 有効なメール形式
// - age: 18以上、120以下の整数
// - password: 8文字以上、大文字・小文字・数字を含む
const signupSchema = z.object({
  name: z
    .string()
    .min(2, "名前は2文字以上で入力してください")
    .max(50, "名前は50文字以下で入力してください"),
  email: z
    .string()
    .email("有効なメールアドレスを入力してください"),
  age: z
    .coerce  // フォームからはstringで来るのでcoerce
    .number({ invalid_type_error: "数値を入力してください" })
    .int("整数を入力してください")
    .min(18, "18歳以上である必要があります")
    .max(120, "120歳以下で入力してください"),
  password: z
    .string()
    .min(8, "パスワードは8文字以上で入力してください")
    .regex(/[A-Z]/, "大文字を1つ以上含めてください")
    .regex(/[a-z]/, "小文字を1つ以上含めてください")
    .regex(/[0-9]/, "数字を1つ以上含めてください"),
});

// ── Step 2: スキーマから型を推論 ──
type SignupFormData = z.infer<typeof signupSchema>;

// ── Step 3: コンポーネント ──
export default function ZodFormDay1() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = (data: SignupFormData) => {
    console.log("✅ バリデーション通過！", data);
    alert(`送信成功！\n名前: ${data.name}\nメール: ${data.email}\n年齢: ${data.age}`);
  };

  return (
    <div style={{ maxWidth: 480, margin: "2rem auto", padding: "1.5rem", border: "1px solid #ddd", borderRadius: 8 }}>
      <h2 style={{ marginBottom: "1rem" }}>📝 Zod + react-hook-form 練習</h2>

      <form onSubmit={handleSubmit(onSubmit)} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {/* Name */}
        <div>
          <label htmlFor="name" style={{ fontWeight: "bold" }}>名前</label>
          <input
            id="name"
            {...register("name")}
            placeholder="Ryoma"
            style={{ width: "100%", padding: "0.5rem", borderRadius: 4, border: "1px solid #ccc" }}
          />
          {errors.name && <p style={{ color: "red", fontSize: "0.85rem" }}>{errors.name.message}</p>}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" style={{ fontWeight: "bold" }}>メール</label>
          <input
            id="email"
            type="email"
            {...register("email")}
            placeholder="ryoma@example.com"
            style={{ width: "100%", padding: "0.5rem", borderRadius: 4, border: "1px solid #ccc" }}
          />
          {errors.email && <p style={{ color: "red", fontSize: "0.85rem" }}>{errors.email.message}</p>}
        </div>

        {/* Age */}
        <div>
          <label htmlFor="age" style={{ fontWeight: "bold" }}>年齢</label>
          <input
            id="age"
            type="number"
            {...register("age")}
            placeholder="25"
            style={{ width: "100%", padding: "0.5rem", borderRadius: 4, border: "1px solid #ccc" }}
          />
          {errors.age && <p style={{ color: "red", fontSize: "0.85rem" }}>{errors.age.message}</p>}
        </div>

        {/* Password */}
        <div>
          <label htmlFor="password" style={{ fontWeight: "bold" }}>パスワード</label>
          <input
            id="password"
            type="password"
            {...register("password")}
            placeholder="Abc12345"
            style={{ width: "100%", padding: "0.5rem", borderRadius: 4, border: "1px solid #ccc" }}
          />
          {errors.password && <p style={{ color: "red", fontSize: "0.85rem" }}>{errors.password.message}</p>}
        </div>

        {/* Buttons */}
        <div style={{ display: "flex", gap: "0.5rem" }}>
          <button
            type="submit"
            disabled={isSubmitting}
            style={{ padding: "0.6rem 1.2rem", background: "#2563eb", color: "#fff", border: "none", borderRadius: 4, cursor: "pointer" }}
          >
            送信
          </button>
          <button
            type="button"
            onClick={() => reset()}
            style={{ padding: "0.6rem 1.2rem", background: "#6b7280", color: "#fff", border: "none", borderRadius: 4, cursor: "pointer" }}
          >
            リセット
          </button>
        </div>

        {isSubmitSuccessful && (
          <p style={{ color: "green", fontWeight: "bold" }}>✅ 送信成功！</p>
        )}
      </form>
    </div>
  );
}
