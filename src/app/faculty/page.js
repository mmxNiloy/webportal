"use client";
import React, { useEffect, useState } from "react";
import { VscArrowCircleLeft, VscArrowCircleRight } from "react-icons/vsc";

export default async function FacultyMembers() {
  const [teachers, setTeachers] = useState();
  const [page, setPage] = useState(1);
  const limit = 10;
  const [loading, setLoading] = useState(false);

  const getTeachers = async () => {
    if (loading) return;
    setLoading(true);

    // TODO: Error handling goes here
    const res = await fetch(`/api/teacher?page=${page}&limit=${limit}`);
    const data = await res.json();

    setTeachers(data);
    setLoading(false);
  };

  useEffect(() => {
    getTeachers();
  }, [page]);

  return (
    <>
      {loading && (
        <div className="text-center bg-info p-3 mt-2 mb-2">Loading...</div>
      )}
      {!loading && teachers && (
        <>
          <div className="text-center bg-info p-3 mt-2 mb-2">
            <h3 className="text-white">Our Faculty Members</h3>
          </div>
          <div className="row">
            {/* Department Chairman Cards */}
            {teachers.data.map((teacher, index) => (
              <div className="col-md-3">
                <div className="card">
                  <img
                    src="https://www.freeiconspng.com/thumbs/profile-icon-png/profile-icon-9.png"
                    className="card-img-top"
                    height="340px"
                    width="80px"
                    alt="Chairman"
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      Teacher ID: {teacher.teacher_id}
                    </h5>
                    <p className="card-text">
                      Designation: {teacher.designation}
                    </p>
                    <p className="card-text">
                      Area of interest: {teacher.area_of_interest}
                    </p>
                    <p className="card-text">Email: johndoe@example.com</p>
                    <p className="card-text">Phone: +1 (123) 456-7890</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
            className="bg-secondary gap-2 p-4"
          >
            {/* Previous button */}
            <button
              type="button"
              onClick={() => setPage(page - 1)}
              disabled={page <= 1}
            >
              <VscArrowCircleLeft size={32} color="blue" />
            </button>

            {/* Page numbers */}
            {Array.from({ length: teachers.page_count }, (_, i) => i + 1).map(
              (num) => (
                <button
                  key={`page-${num}`}
                  onClick={() => setPage(num)}
                  style={{
                    height: 32,
                    width: 32,
                  }}
                  className={`rounded-circle border-info ${
                    page === num ? "bg-primary text-white" : ""
                  }`}
                >
                  {num}
                </button>
              )
            )}

            {/* Next button */}
            <button
              type="button"
              onClick={() => setPage(page + 1)}
              disabled={page >= teachers.page_count}
            >
              <VscArrowCircleRight size={32} color="blue" />
            </button>
          </div>
        </>
      )}
    </>
  );
}
