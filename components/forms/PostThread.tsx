"use client";
import { UploadButton } from "@/lib/uploadthing";
import { UploadDropzone } from "@uploadthing/react";
import type { OurFileRouter } from "@/app/api/uploadthing/core";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { useOrganization } from "@clerk/nextjs";
import { zodResolver } from "@hookform/resolvers/zod";
import { usePathname, useRouter } from "next/navigation";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

import { ThreadValidation } from "@/lib/validations/thread";
import { createThread } from "@/lib/actions/thread.actions";
import { useState } from "react";

interface Props {
  userId: string;
}

function PostThread({ userId }: Props) {
  // State to keep track of the uploaded file's URL and upload status
  const [fileUrl, setFileUrl] = useState("");
  const [uploadStatus, setUploadStatus] = useState("");
  const router = useRouter();
  const pathname = usePathname();

  const { organization } = useOrganization();

  const form = useForm<z.infer<typeof ThreadValidation>>({
    resolver: zodResolver(ThreadValidation),
    defaultValues: {
      thread: "",
      accountId: userId,
    },
  });

  const onSubmit = async (values: z.infer<typeof ThreadValidation>) => {
    await createThread({
      text: values.thread,
      author: userId,
      communityId: organization ? organization.id : null,
      path: pathname,
    });

    router.push("/");
  };

  // Define the content for the UploadDropzone based on the upload status
  const uploadDropzoneContent = {
    label: () => {
      if (uploadStatus === "success") {
        return <p>1 file uploaded successfully</p>;
      }
      return <p>Drag 'n' drop some files here, or click to select file</p>;
    },
  };

  return (
    <Form {...form}>
      <form
        className="mt-5 flex flex-col justify-start gap-10"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name="thread"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col gap-3">
              <FormLabel className="text-base-semibold text-slate-400">Share you research work</FormLabel>
              <FormControl className="no-focus border border-dark-4 ">
                <Textarea
                  rows={15}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* <UploadButton
          className="border bg-slate-300 rounded-md"
          endpoint="media"
          onClientUploadComplete={(res) => {
            // Do something with the response
            console.log("Files: ", res);
            alert("Upload Completed");
          }}
          onUploadError={(error: Error) => {
            // Do something with the error.
            alert(`ERROR! ${error.message}`);
          }}
        /> */}
        <UploadDropzone<OurFileRouter>
          appearance={{
            button: "p-4 ut-ready:bg-green-500 ut-uploading:cursor-not-allowed e bg-red-500 bg-none after:bg-green-400",
          }}
          className="  text-blue-300 border-2 border-dashed border-light-3 rounded-lg p-6 cursor-pointer hover:border-primary-500 focus:border-primary-500 transition-all"
          endpoint="media"
          content={uploadDropzoneContent}
          // Add this line to accept only PDF files
          onClientUploadComplete={(res: any) => {
            console.log("Files: ", res);
            // Set the file URL and update the upload status
            setFileUrl(res.url); // Assuming 'res.url' contains the URL of the uploaded file
            setUploadStatus("success");
            console.log("Files: ", res);
            alert("Upload Completed");
          }}
          onUploadError={(error: Error) => {
            setUploadStatus("error");
            alert(`ERROR! ${error.message}`);
          }}
          onUploadBegin={() => {
            setUploadStatus("uploading");
            console.log("Uploading...");
          }}
        />
        <Button type="submit">Publish</Button>
      </form>
    </Form>
  );
}

export default PostThread;
