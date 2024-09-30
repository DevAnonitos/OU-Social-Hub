"use client"

import React, { useState } from 'react';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow,
  TableFooter,
} from '../ui/table';
import { useRouter } from 'next/navigation';
import { ExternalLinkIcon } from '@radix-ui/react-icons';
import { Button } from '../ui/button';

// Dữ liệu mẫu cho các sự kiện
const events = [
  { id: 1, eventTitle: "Event 1", organizer: "User A", createdAt: "2024-09-20", status: "Pending" },
  { id: 2, eventTitle: "Event 2", organizer: "User B", createdAt: "2024-09-21", status: "Approved" },
  { id: 3, eventTitle: "Event 3", organizer: "User C", createdAt: "2024-09-22", status: "Pending" },
  { id: 4, eventTitle: "Event 4", organizer: "User D", createdAt: "2024-09-23", status: "Rejected" },
  { id: 5, eventTitle: "Event 5", organizer: "User E", createdAt: "2024-09-24", status: "Pending" },
  { id: 6, eventTitle: "Event 6", organizer: "User F", createdAt: "2024-09-25", status: "Pending" },
  { id: 7, eventTitle: "Event 7", organizer: "User G", createdAt: "2024-09-26", status: "Approved" },
  { id: 8, eventTitle: "Event 8", organizer: "User H", createdAt: "2024-09-27", status: "Rejected" },
];

// Component quản lý sự kiện với phân trang và cột Review
const EventsDataTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 5;
  const router = useRouter();

  // Tính toán chỉ số của các sự kiện
  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = events.slice(indexOfFirstEvent, indexOfLastEvent);

  // Tạo số trang
  const totalPages = Math.ceil(events.length / eventsPerPage);

  // Chuyển trang
  const goToNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleReview = (eventId: string) => {
    // Điều hướng tới trang xem trước sự kiện theo eventId
    router.push(`/admin/events/${eventId}`);
  };

  return (
    <div className='z-10 w-full overflow-hidden border-[1px] rounded-lg border-slate-400'>
      <Table className='rounded-lg overflow-hidden'>
        <TableHeader className='text-lg font-bold text-black'>
          <TableRow>
            <TableHead className="w-[50px] text-xl font-bold text-black">ID</TableHead>
            <TableHead className="w-[200px] text-xl font-bold text-black">Event Name</TableHead>
            <TableHead className="w-[150px] text-center text-xl font-bold text-black">Organizer</TableHead>
            <TableHead className='text-xl text-center font-bold text-black'>Created At</TableHead>
            <TableHead className="text-center text-xl font-bold text-black">Review</TableHead>
            <TableHead className="text-center text-xl font-bold text-black">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {currentEvents.map((event) => (
            <TableRow key={event.id}>
              <TableCell className="font-medium">{event.id}</TableCell>
              <TableCell className="font-medium">{event.eventTitle}</TableCell>
              <TableCell className='text-center'>{event.organizer}</TableCell>
              <TableCell className='text-center'>{new Date(event.createdAt).toLocaleDateString()}</TableCell>
              <TableCell className="text-center">
                <button
                  
                >
                  <ExternalLinkIcon width={25} height={25} />
                </button>
              </TableCell>
              <TableCell className="text-center space-x-2">
                <Button>
                  Approve
                </Button>
                <Button variant="destructive">
                  Reject
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={6} className="text-center">
              <button
                onClick={goToPreviousPage}
                disabled={currentPage === 1}
                className="mr-4 bg-gray-300 px-4 py-2 rounded-lg"
              >
                Previous
              </button>
              <span>Page {currentPage} of {totalPages}</span>
              <button
                onClick={goToNextPage}
                disabled={currentPage === totalPages}
                className="ml-4 bg-gray-300 px-4 py-2 rounded-lg"
              >
                Next
              </button>
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
};

export default EventsDataTable;
