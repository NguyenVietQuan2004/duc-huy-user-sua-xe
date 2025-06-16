"use client";

import Link from "next/link";
import { Blog } from "@/type/blog";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useEffect, useState } from "react";
import { injectImageRandomly } from "@/lib/utils";

// Data mẫu dạng blog

export default function SearchResults({ keyword }: { keyword: string }) {
  const [blogs, setBlogs] = useState<any>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  useEffect(() => {
    // setBlogs(sampleArrayBlog);
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
    <div className="space-y-6 py-30 lg:py-20 pt-32 lg:pt-0 pb-10 lg:pb-0 min-h-[80vh]">
      <h2 className="text-2xl font-bold">
        Kết quả tìm kiếm cho "<span className="text-primary">{keyword}</span>"
      </h2>

      {paginatedBlogs.map((item: any) => (
        <Link
          href={`/search/${item._id}`}
          key={item._id}
          className="border-t block group hover:!text-[#f6ab35] transition-all duration-300 pt-4"
        >
          <h3 className="text-xl font-semibold group-hover:!text-[#f6ab35] transition-all duration-300">
            {item.title}
          </h3>
          {/* <p className="text-[14px] text-muted-foreground mt-1 group-hover:!text-[#f6ab35] transition-all duration-300">
            {item.content}
          </p> */}

          <div
            className="text-lg line-clamp-3"
            style={{ whiteSpace: "pre-wrap" }}
            dangerouslySetInnerHTML={{
              __html: injectImageRandomly(item.content, item.images, item.images_name),
            }}
          />
        </Link>
      ))}
      {blogs.length === 0 && <div>Không tìm thấy kết quả tìm kiếm với từ khóa '{keyword}'</div>}

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
