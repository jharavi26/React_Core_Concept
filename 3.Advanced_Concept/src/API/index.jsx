const GetUser = async () => {
  const response = await fetch(" https://randomuser.me/api/", {
      method: "GET",
  });

  if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
  }

  return await response.json(); // Parse the response into JSON
};

export default GetUser;
