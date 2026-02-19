import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-100 dark:bg-black flex items-center justify-center px-4">
      <div className="w-full max-w-md rounded-2xl bg-white dark:bg-zinc-900 shadow-lg p-6">
        
        {/* Profile Image */}
        <div className="flex justify-center">
          <Image
            src="/profile.jpg" // place image in public folder
            alt="User Profile"
            width={120}
            height={120}
            className="rounded-full border-4 border-zinc-200 dark:border-zinc-700"
          />
        </div>

        {/* User Info */}
        <div className="mt-4 text-center">
          <h1 className="text-2xl font-semibold text-zinc-900 dark:text-white">
            Dhanush G
          </h1>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            Final Year ISE Student | Software Engineer Intern | Platform Development
          </p>
        </div>

        {/* Bio */}
        <p className="mt-4 text-center text-zinc-600 dark:text-zinc-400">
          Passionate about building modern web applications using Next.js,
          Tailwind CSS, and cloud technologies (AWS).
        </p>

        {/* Stats */}
        <div className="mt-6 flex justify-around text-center">
          <div>
            <p className="text-xl font-semibold text-zinc-900 dark:text-white">
              24
            </p>
            <p className="text-sm text-zinc-500">Projects</p>
          </div>
          <div>
            <p className="text-xl font-semibold text-zinc-900 dark:text-white">
              1.2k
            </p>
            <p className="text-sm text-zinc-500">Followers</p>
          </div>
          <div>
            <p className="text-xl font-semibold text-zinc-900 dark:text-white">
              180
            </p>
            <p className="text-sm text-zinc-500">Following</p>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-6 flex gap-4">
          <button className="flex-1 rounded-full bg-black text-white py-2 text-sm hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200">
            Edit Profile
          </button>
          <button className="flex-1 rounded-full border border-zinc-300 dark:border-zinc-700 py-2 text-sm text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800">
            Message
          </button>
        </div>
      </div>
    </div>
  );
}
