"use client"
import { useState } from "react"
import { z } from "zod"

const schema = z.object({
  email: z.string().email("メール形式じゃない"),
  password: z.string().min(8, "8文字以上"),
})

export default function ZodOnlyForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const r = schema.safeParse({ email, password })
    if (!r.success) {
      // 手動でエラーを取り出す必要がある
      setError(r.error.issues[0]?.message ?? "入力エラー")
      return
    }

    setError("")
    console.log("OK", r.data)
  }

  return (
    <form onSubmit={onSubmit}>
      <input value={email} onChange={(e) => setEmail(e.target.value)} />
      <input value={password} onChange={(e) => setPassword(e.target.value)} />
      <p>{error}</p>
      <button>送信</button>
    </form>
  )
}
