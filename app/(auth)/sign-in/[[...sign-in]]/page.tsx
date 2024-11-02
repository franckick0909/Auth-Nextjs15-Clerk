import { SignIn } from "@clerk/nextjs";

export default function pageSignIn() {
  return (
    <div className="w-full flex min-h-screen flex-col items-center justify-center">
      <SignIn />
    </div>
  )
}
