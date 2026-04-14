import { Router, type IRouter } from "express";
import { db, contactSubmissionsTable } from "@workspace/db";
import { SubmitContactFormBody } from "@workspace/api-zod";

const router: IRouter = Router();

router.post("/contact", async (req, res): Promise<void> => {
  const parsed = SubmitContactFormBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.message });
    return;
  }

  const [submission] = await db
    .insert(contactSubmissionsTable)
    .values({
      name: parsed.data.name,
      phone: parsed.data.phone,
      message: parsed.data.message ?? null,
    })
    .returning();

  req.log.info({ id: submission.id }, "Contact form submission received");

  res.status(201).json({ success: true, id: submission.id });
});

export default router;
