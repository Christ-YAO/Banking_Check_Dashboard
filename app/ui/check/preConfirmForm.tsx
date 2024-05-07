"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast"

const formSchema = z.object({
  checkNum: z
    .string()
    .min(7, { message: "Ce champ doit contenir au moins 7 caractères." }),
  benefited: z.string().min(2, {
    message: "Ce champ doit contenir au moins 2 caractères.",
  }),
  rising: z
    .string()
    .min(6, { message: "Ce champ doit contenir au mons 6 chiffres." }),
  comment: z
    .string()
    .min(10, {
      message: "Ce champ doit contenir au moins 10 caractères.",
    })
    .max(160, {
      message: "Bio must not be longer than 30 characters.",
    }),
});

type PropsType = {
  id?: string,
}

export default function PreConfirmForm( props: PropsType ) {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      //   dob: null,
      checkNum: props.id ? props.id : "",
      benefited: "",
      rising: "",
      comment: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    toast({
      title: "BRAVO!",
      description: "Pré-confirmation réussie.",
    });
    
    setTimeout(() => {
      location.href = "http://localhost:3000/dashboard/pre-confirm";
    }, 2000)
  }

  return (
    <div>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        {/* Customer Name */}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="checkNum"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Numéro de chèque</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Ex: 9273619"
                      className="bg-white"
                      {...field}
                    />
                  </FormControl>
                  {/* <FormDescription>
                    This is your public display name.
                  </FormDescription> */}
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="benefited"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Bénéficiaire</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="John Doe"
                      className="bg-white"
                      {...field}
                    />
                  </FormControl>
                  {/* <FormDescription>
                    This is your public display name.
                  </FormDescription> */}
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="rising"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Montant</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="1000000"
                      className="bg-white"
                      {...field}
                      type="number"
                    />
                  </FormControl>
                  {/* <FormDescription>
                    This is your public display name.
                  </FormDescription> */}
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
          control={form.control}
          name="comment"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Commentaire</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Laissez un commentaire."
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              {/* <FormDescription>
                You can <span>@mention</span> other users and organizations.
              </FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
            <div className=""></div>
            <div className="">
              <Button type="submit">Valider</Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
