import asyncHandler from "express-async-handler";

//@desc Send mail [SendMail].
//@route POST /api/sendmail
//@access public
const sendMail = asyncHandler(async (req, res) => {
  console.log("post-data", req.body);
  if (!Object.keys(req.body).length) {
    res.status(400);
    throw new Error("Request Body can not be empty.");
  }
  res.status(201).json({ message: "Mail sent successfully.." });
});

export { sendMail };
