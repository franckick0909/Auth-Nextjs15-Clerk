import { SignUp } from "@clerk/nextjs";

export default function pageSignUp() {
  return (
    <div className="w-full flex min-h-screen flex-col items-center justify-center">
      <SignUp />
    </div>
  )
}
