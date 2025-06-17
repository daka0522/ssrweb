export default {
  async fetch(request, env) {
    // 예: /note/filename.md 요청 시 filename.md 파일 반환
    const url = new URL(request.url);
    const path = url.pathname.replace(/^\/+/, ""); // 앞의 / 제거
    if (!path.endsWith(".md")) {
      return new Response("Only .md files allowed", { status: 400 });
    }

    const object = await env.MY_BUCKET.get(path);
    if (!object) {
      return new Response("File not found", { status: 404 });
    }

    return new Response(object.body, {
      headers: {
        "Content-Type": "text/markdown",
        "Content-Disposition": `attachment; filename="${path}"`
      }
    });
  }
};