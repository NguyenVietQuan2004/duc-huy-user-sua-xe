"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Blog } from "@/type/blog";

// Data mẫu dạng blog
const sampleBlog = Array.from({ length: 23 }).map((_, i) => ({
  _id: `${i + 1}`,
  title: `Bài viết số ${i + 1}`,
  name: `bai-viet-so-${i + 1}`,
  content: `Nội dung mô tả cho bài viết số ${i + 1}. Đây là ví dụ mẫu.`,
  images: [],
  images_name: [],
  author_id: 1,
  created_at: new Date(),
  updated_at: new Date(),
}));

export default function SearchResults({ keyword }: { keyword: string }) {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  useEffect(() => {
    setBlogs(sampleBlog);
  }, []);

  const totalPages = Math.ceil(blogs.length / itemsPerPage);
  const paginatedBlogs = blogs.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="space-y-6 py-20 min-h-[80vh]">
      <h2 className="text-2xl font-bold">
        Kết quả tìm kiếm cho "<span className="text-primary">{keyword}</span>"
      </h2>

      {paginatedBlogs.map((item) => (
        <Link
          href={`/timkiem/${item._id}`}
          key={item._id}
          className="border-t block group hover:!text-[#d51921] transition-all duration-300 pt-4"
        >
          <h3 className="text-xl font-semibold group-hover:!text-[#d51921] transition-all duration-300">
            {item.title}
          </h3>
          <p className="text-[14px] text-muted-foreground mt-1 group-hover:!text-[#d51921] transition-all duration-300">
            {item.content}
          </p>
        </Link>
      ))}

      {/* Pagination UI */}
      {totalPages > 1 && (
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                onClick={() => handlePageChange(currentPage - 1)}
                className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
              />
            </PaginationItem>

            {Array.from({ length: totalPages }).map((_, idx) => (
              <PaginationItem key={idx}>
                <PaginationLink isActive={currentPage === idx + 1} onClick={() => handlePageChange(idx + 1)}>
                  {idx + 1}
                </PaginationLink>
              </PaginationItem>
            ))}

            <PaginationItem>
              <PaginationNext
                onClick={() => handlePageChange(currentPage + 1)}
                className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </div>
  );
}
