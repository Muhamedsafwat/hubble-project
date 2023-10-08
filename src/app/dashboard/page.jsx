"use client";
import React, { useState } from "react";
import axios from "axios";

const Page = () => {
  const [loading, setLoading] = useState(false);

  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [description, setDescription] = useState("");
  const [launchDate, setLaunchDate] = useState("");
  const [type, setType] = useState("");
  const [target, setTarget] = useState("");
  const [status, setStatus] = useState("");
  const [cover, setCover] = useState("");
  const [sections, setSections] = useState([]);
  const [currentSectionHeading, setCurrentSectionHeading] = useState("");
  const [currentSectionText, setCurrentSectionText] = useState("");

  const addSection = () => {
    const section = {
      heading: currentSectionHeading,
      text: currentSectionText,
    };
    setSections([...sections, section]);
    setCurrentSectionHeading("");
    setCurrentSectionText("");
  };

  const onPhotoChange = (file) => {
    const photoReader = new FileReader();
    photoReader.onloadend = (e) => {
      setCover(photoReader.result);
      console.log(photoReader.result);
    };
    photoReader.readAsDataURL(file);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    const reqBody = {
      title,
      slug,
      description,
      properties: [
        { label: "Launch date", text: launchDate },
        { label: "Type", text: type },
        { label: "Target", text: target },
        { label: "Status", text: status },
      ],
      cover,
      body: sections,
    };

    axios
      .post(`${process.env.NEXT_PUBLIC_API_URL}/api/missions`, { ...reqBody })
      .then((res) => {
        console.log(res);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="px-40 mt-36">
      <h1 className="text-center text-5xl font-semibold mb-10">Add mission</h1>
      <form onSubmit={submitHandler} className="flex flex-col gap-8 text-xl">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="mission title"
          className="bg-transparent border-[1px] border-gray-500 p-5 rounded-lg"
        />
        <input
          type="text"
          value={slug}
          onChange={(e) => setSlug(e.target.value)}
          placeholder="mission slug (URL)"
          className="bg-transparent border-[1px] border-gray-500 p-5 rounded-lg"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          cols="20"
          rows="7"
          placeholder="mission description"
          className="bg-transparent border-[1px] border-gray-500 p-5 rounded-lg"
        />
        <div className="flex justify-between">
          <input
            value={launchDate}
            onChange={(e) => setLaunchDate(e.target.value)}
            type="text"
            placeholder="Launch date"
            className="bg-transparent border-[1px] border-gray-500 p-5 rounded-lg"
          />
          <input
            value={type}
            onChange={(e) => setType(e.target.value)}
            type="text"
            placeholder="Type"
            className="bg-transparent border-[1px] border-gray-500 p-5 rounded-lg"
          />
          <input
            value={target}
            onChange={(e) => setTarget(e.target.value)}
            type="text"
            placeholder="Target"
            className="bg-transparent border-[1px] border-gray-500 p-5 rounded-lg"
          />
          <input
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            type="text"
            placeholder="Status"
            className="bg-transparent border-[1px] border-gray-500 p-5 rounded-lg"
          />
        </div>
        <div>
          <label htmlFor="cover" className="block mb-2">
            Cover
          </label>
          <input
            onChange={(e) => onPhotoChange(e.target.files[0])}
            id="cover"
            type="file"
          />
        </div>
        <div className="flex flex-col gap-5">
          <p className="text-center text-4xl font-semibold">Sections</p>
          {!!sections.length &&
            sections.map((item, index) => (
              <section key={index}>
                <h2 className="text-4xl font-medium mt-8 mb-4">
                  {item.heading}
                </h2>
                <p className="text-lg">{item.text}</p>
              </section>
            ))}
          <input
            value={currentSectionHeading}
            onChange={(e) => setCurrentSectionHeading(e.target.value)}
            type="text"
            placeholder="Section heading"
            className="bg-transparent border-[1px] border-gray-500 p-5 rounded-lg"
          />
          <textarea
            value={currentSectionText}
            onChange={(e) => setCurrentSectionText(e.target.value)}
            rows="5"
            placeholder="Section details"
            className="bg-transparent border-[1px] border-gray-500 p-5 rounded-lg"
          />
          <button
            type="button"
            onClick={addSection}
            className="rounded-md bg-gray-500 p-5 w-52 mx-auto"
          >
            Add Section
          </button>
        </div>
        <button
          disabled={loading}
          type="submit"
          className="rounded-md bg-gray-500 p-5 w-52 mx-auto"
        >
          {loading ? "Loading" : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default Page;
