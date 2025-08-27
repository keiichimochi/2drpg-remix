import { json, type LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData, useFetcher, Form } from "@remix-run/react";
import { useState } from "react";
import { storage } from "~/models/db.server";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  try {
    const projects = await storage.getAllProjects();
    return json({ projects });
  } catch (error) {
    console.error("Failed to fetch projects:", error);
    return json({ projects: [] });
  }
};

export default function EditorLayout() {
  const { projects } = useLoaderData<typeof loader>();
  const fetcher = useFetcher();
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [projectName, setProjectName] = useState("");

  const handleCreateProject = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", projectName);

    fetcher.submit(formData, {
      method: "POST",
      action: "/api/projects",
    });

    setProjectName("");
    setShowCreateForm(false);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-gray-800 border-b border-gray-700 p-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-green-400">8bit RPG Editor</h1>
          <nav className="flex space-x-4">
            <a href="/" className="text-gray-300 hover:text-white">
              ホーム
            </a>
            <a href="/preview" className="text-gray-300 hover:text-white">
              プレビュー
            </a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-semibold">プロジェクト</h2>
            <button
              onClick={() => setShowCreateForm(true)}
              className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg font-semibold transition-colors"
            >
              新規プロジェクト
            </button>
          </div>

          {/* Create Project Modal */}
          {showCreateForm && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-gray-800 p-6 rounded-lg w-96">
                <h3 className="text-lg font-semibold mb-4">新規プロジェクト作成</h3>
                <Form onSubmit={handleCreateProject}>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      プロジェクト名
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={projectName}
                      onChange={(e) => setProjectName(e.target.value)}
                      className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="例: My RPG Game"
                      required
                    />
                  </div>
                  <div className="flex space-x-3">
                    <button
                      type="button"
                      onClick={() => setShowCreateForm(false)}
                      className="flex-1 bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded-lg transition-colors"
                    >
                      キャンセル
                    </button>
                    <button
                      type="submit"
                      className="flex-1 bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg font-semibold transition-colors"
                    >
                      作成
                    </button>
                  </div>
                </Form>
              </div>
            </div>
          )}

          {/* Projects Grid */}
          {projects.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-gray-400 text-lg mb-4">
                まだプロジェクトがありません
              </div>
              <p className="text-gray-500">
                「新規プロジェクト」ボタンから最初のプロジェクトを作成しましょう
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="bg-gray-800 border border-gray-700 rounded-lg p-6 hover:border-green-500 transition-colors cursor-pointer"
                >
                  <h3 className="text-lg font-semibold mb-2">{project.name}</h3>
                  <p className="text-gray-400 text-sm mb-4">
                    作成日: {new Date(project.createdAt).toLocaleDateString('ja-JP')}
                  </p>
                  <div className="flex space-x-2">
                    <a
                      href={`/editor/${project.id}`}
                      className="flex-1 bg-green-600 hover:bg-green-700 px-4 py-2 rounded text-center text-sm font-semibold transition-colors"
                    >
                      編集
                    </a>
                    <a
                      href={`/preview/${project.id}`}
                      className="flex-1 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-center text-sm font-semibold transition-colors"
                    >
                      プレビュー
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
