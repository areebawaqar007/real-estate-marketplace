import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { useSelector } from "react-redux";
import { Navigation } from "swiper/modules";
import "swiper/css/bundle";

import {
  FaBath,
  FaBed,
  FaChair,
  FaMapMarkerAlt,
  FaParking,
  FaShare,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

export default function Listing() {
  SwiperCore.use([Navigation]);

  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [copied, setCopied] = useState(false);

  const params = useParams();
  const { currentUser } = useSelector((state) => state.user);

  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchListing = async () => {
      try {
        setLoading(true);

        const res = await fetch(
          `${API_URL}/api/listing/get/${params.listingId}`
        );

        const data = await res.json();

        if (data.success === false) {
          setError(true);
          setLoading(false);
          return;
        }

        setListing(data);
        setLoading(false);
        setError(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };

    fetchListing();
  }, [params.listingId]);

  return (
    <main>
      {loading && (
        <p className="text-center my-7 text-2xl">
          Loading...
        </p>
      )}

      {error && (
        <p className="text-center my-7 text-2xl">
          Something went wrong!
        </p>
      )}

      {listing && !loading && !error && (
        <div>
          {/* =========================
              IMAGE SLIDER
          ========================= */}
          <Swiper navigation>
            {listing.imageUrls.map((url) => (
              <SwiperSlide key={url}>
                <div
                  className="h-[550px]"
                  style={{
                    background: `url(${url}) center no-repeat`,
                    backgroundSize: "cover",
                  }}
                ></div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* =========================
              SHARE BUTTON
          ========================= */}
          <div className="fixed top-[13%] right-[3%] z-10 border rounded-full w-12 h-12 flex justify-center items-center bg-slate-100 cursor-pointer">
            <FaShare
              className="text-slate-500"
              onClick={() => {
                navigator.clipboard.writeText(window.location.href);
                setCopied(true);

                setTimeout(() => {
                  setCopied(false);
                }, 2000);
              }}
            />
          </div>

          {copied && (
            <p className="fixed top-[23%] right-[5%] z-10 rounded-md bg-slate-100 p-2">
              Link copied!
            </p>
          )}

          {/* =========================
              LISTING DETAILS
          ========================= */}
          <div className="flex flex-col max-w-4xl mx-auto p-3 my-7 gap-4">
            {/* TITLE + PRICE */}
            <p className="text-2xl font-semibold">
              {listing.name} -{" "}
              PKR{" "}
              {listing.offer
                ? Number(listing.discountPrice).toLocaleString("en-PK")
                : Number(listing.regularPrice).toLocaleString("en-PK")}
              {listing.type === "rent" && " / month"}
            </p>

            {/* ADDRESS */}
            <p className="flex items-center mt-6 gap-2 text-slate-600 text-sm">
              <FaMapMarkerAlt className="text-green-700" />
              {listing.address}
            </p>

            {/* SALE / RENT + OFFER */}
            <div className="flex gap-4">
              <p className="bg-red-900 w-full max-w-[200px] text-white text-center p-1 rounded-md">
                {listing.type === "rent" ? "For Rent" : "For Sale"}
              </p>

              {listing.offer && (
                <p className="bg-green-900 w-full max-w-[200px] text-white text-center p-1 rounded-md">
                  PKR{" "}
                  {(
                    Number(listing.regularPrice) -
                    Number(listing.discountPrice)
                  ).toLocaleString("en-PK")}{" "}
                  OFF
                </p>
              )}
            </div>

            {/* DESCRIPTION */}
            <p className="text-slate-800">
              <span className="font-semibold text-black">
                Description -{" "}
              </span>
              {listing.description}
            </p>

            {/* PROPERTY FEATURES */}
            <ul className="text-green-900 font-semibold text-sm flex flex-wrap items-center gap-4 sm:gap-6">
              <li className="flex items-center gap-1 whitespace-nowrap">
                <FaBed className="text-lg" />

                {listing.bedrooms > 1
                  ? `${listing.bedrooms} beds`
                  : `${listing.bedrooms} bed`}
              </li>

              <li className="flex items-center gap-1 whitespace-nowrap">
                <FaBath className="text-lg" />

                {listing.bathrooms > 1
                  ? `${listing.bathrooms} baths`
                  : `${listing.bathrooms} bath`}
              </li>

              <li className="flex items-center gap-1 whitespace-nowrap">
                <FaParking className="text-lg" />

                {listing.parking
                  ? "Parking spot"
                  : "No Parking"}
              </li>

              <li className="flex items-center gap-1 whitespace-nowrap">
                <FaChair className="text-lg" />

                {listing.furnished
                  ? "Furnished"
                  : "Unfurnished"}
              </li>
            </ul>

            {/* =========================
                CONTACT LANDLORD
            ========================= */}
            {currentUser &&
              listing.userRef !== currentUser._id && (
                <div className="border rounded-lg p-5 mt-4 bg-slate-50">
                  <h2 className="text-xl font-semibold mb-4">
                    Contact Landlord
                  </h2>

                  <div className="flex flex-col gap-4">
                    {/* PHONE */}
                    <div className="flex items-center gap-3">
                      <FaPhone className="text-green-700" />

                      <div>
                        <p className="text-sm text-gray-500">
                          Phone
                        </p>

                        <a
                          href={`tel:${listing.phone}`}
                          className="text-green-700 font-semibold hover:underline"
                        >
                          {listing.phone}
                        </a>
                      </div>
                    </div>

                    {/* EMAIL */}
                    <div className="flex items-center gap-3">
                      <FaEnvelope className="text-green-700" />

                      <div>
                        <p className="text-sm text-gray-500">
                          Email
                        </p>

                        <a
                          href={`mailto:${listing.email}`}
                          className="text-green-700 font-semibold hover:underline"
                        >
                          {listing.email}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )}
          </div>
        </div>
      )}
    </main>
  );
}
