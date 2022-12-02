import React, { useState, useEffect } from "react";

export default function Footer() {
  const [date, setDate] = useState();

  const getYear = () => setDate(new Date().getFullYear());

  useEffect(() => {
    getYear();
  }, []);
  return <footer>&copy; LTD SunRise - {date} year</footer>;
}
