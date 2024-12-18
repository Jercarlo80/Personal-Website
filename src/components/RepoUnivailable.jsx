import React from "react";

export default function RepoUnavailable() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-4">Repository Tidak Dapat Dibuka</h1>
      <p className="text-lg text-gray-400">
        Repositori ini bersifat pribadi atau belum tersedia untuk publik.
      </p>
    </div>
  );
}
