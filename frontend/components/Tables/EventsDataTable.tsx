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
import { useGetPendingEvents } from '@/lib/react-query/queries';// Import your useGetPendingEvents hook
import { Button } from '../ui/button';

const EventsDataTable = () => {
  const { data: events = [], isLoading } = useGetPendingEvents(); // Set default to an empty array
  const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 5;
  const router = useRouter();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Ensure events is an array
  const validEvents = Array.isArray(events) ? events : [];

  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = validEvents.slice(indexOfFirstEvent, indexOfLastEvent);

  const totalPages = Math.ceil(validEvents.length / eventsPerPage);

  const goToNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleReview = (eventId: string) => {
    router.push(`/admin/events/${eventId}`);
  };

  return (
    <div className='z-10 w-full overflow-hidden border-[1px] rounded-lg border-slate-400'>
      <Table className='rounded-lg overflow-hidden'>
        <TableHeader className='text-lg font-bold text-black'>
          <TableRow>
            <TableHead className="w-[85px] text-xl font-bold text-black">ID</TableHead>
            <TableHead className="w-[385px] text-xl font-bold text-black">Event Name</TableHead>
            <TableHead className="w-[155px] text-center text-xl font-bold text-black">Organizer</TableHead>
            <TableHead className='text-xl text-center font-bold text-black'>Created At</TableHead>
            <TableHead className="text-center text-xl font-bold text-black">Review</TableHead>
            <TableHead className="text-center text-xl font-bold text-black">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {currentEvents.map((event) => (
            <TableRow key={event.id}>
              <TableCell>{event.id}</TableCell>
              <TableCell>{event.eventTitle}</TableCell>
              {/* Access a property from organizer (e.g., username or email) */}
              <TableCell className="text-center">{event.organizer?.username || 'N/A'}</TableCell>
              <TableCell className="text-center">{new Date(event.createdAt).toLocaleDateString()}</TableCell>
              <TableCell className="text-center">
                <Button onClick={() => handleReview(event.id)}>
                  Review
                </Button>
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
