interface PaginationProps {
  page: number;
  pages: number;
}

export default function Pagination({ page, pages }: PaginationProps) {
  return (
    <div className="flex justify-center gap-4 mt-10">
      {page > 1 && (
        <a href={`?page=${page - 1}`} className="px-4 py-2 bg-gray-700 rounded">
          Previous
        </a>
      )}

      {page < pages && (
        <a
          href={`?page=${page + 1}`}
          className="px-4 py-2 bg-yellow-500 text-black rounded"
        >
          Next
        </a>
      )}
    </div>
  );
}