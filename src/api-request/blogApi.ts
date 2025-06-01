import httpRequest from "@/lib/http";

export const blogApi = {
  getAllBlogs({ limit, page }: { limit?: number; page?: number }) {
    return httpRequest.get<any>(
      `${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/admin/blogs/all?limit=${limit}&page=${page}`,
      {}
    );
  },
  getBlogById({ blogId }: { blogId: string }) {
    return httpRequest.get<any>(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/admin/blogs/detail/${blogId}`, {});
  },
  updateBlog({ formData, headers, _id }: { formData: any; headers: HeadersInit; _id: string }) {
    return httpRequest.put<any>(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/admin/blogs/${_id}`, {
      headers,
      body: formData,
    });
  },
  deleteBlog({ _id, headers }: { _id: any; headers: HeadersInit }) {
    return httpRequest.delete<any>(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/admin/blogs/${_id}`, {
      headers,
    });
  },
  createBlog({ formData, headers }: any) {
    return httpRequest.post<any>(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/admin/blogs`, {
      headers,
      body: formData,
    });
  },
};
