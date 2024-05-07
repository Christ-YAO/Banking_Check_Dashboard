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
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";
  import { toast } from "@/components/ui/use-toast"

const formSchema = z.object({
  accountNumber: z
    .string()
    .min(27, { message: "Ce champ doit contenir au moins 27 caractères." }),
  address: z
    .string()
    .min(15, { message: "Ce champ doit contenir au moins 15 caractères." }),
  name: z.string().min(2, {
    message: "Ce champ doit contenir au moins 2 caractères.",
  }),
  sheet: z
    .string({
      required_error: "Veuillez choisir le nombre de feuilles.",
    })
    .min(1, { message: "Ce champ est obligatoire." }),
  quantity: z
    .string({
      required_error: "Veuillez choisir la quantité.",
    })
    .min(1, { message: "Ce champ est obligatoire." }),
});

type PropsType = {
  id?: string;
};

export default function CommandForm(props: PropsType) {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      //   dob: null,
      accountNumber: "",
      address: "",
      name: "",
      sheet: "",
      quantity: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    toast({
      title: "BRAVO!",
      description: "Votre commande à été passé avec success!",
    });
    setTimeout(() => {
      location.href = "http://localhost:3000/dashboard/chequier";
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
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nom & Prénom(s)</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Ex: John Doe"
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
              name="accountNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Numéro de compte</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Ex: FR7630001007941234567890185"
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
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Address</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Ex: 17 BP 105 ABIDJAN 17  "
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
              name="sheet"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nombre feuille</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue
                          className=""
                          placeholder="Selectionner"
                        />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="25">
                        25
                      </SelectItem>
                      <SelectItem value="50">
                        50
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  {/* <FormDescription>
                    You can manage email addresses in your{" "}
                    <Link href="/examples/forms">email settings</Link>.
                  </FormDescription> */}
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="quantity"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Quantité</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue
                          className=""
                          placeholder="Selectionner"
                        />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="1">
                        1
                      </SelectItem>
                      <SelectItem value="2">
                        2
                      </SelectItem>
                      <SelectItem value="3">
                        3
                      </SelectItem>
                      <SelectItem value="4">
                        4
                      </SelectItem>
                      <SelectItem value="5">
                        5
                      </SelectItem>
                      <SelectItem value="6">
                        6
                      </SelectItem>
                      <SelectItem value="7">
                        7
                      </SelectItem>
                      <SelectItem value="8">
                        8
                      </SelectItem>
                      <SelectItem value="9">
                        9
                      </SelectItem>
                      <SelectItem value="10">
                        10
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  {/* <FormDescription>
                    You can manage email addresses in your{" "}
                    <Link href="/examples/forms">email settings</Link>.
                  </FormDescription> */}
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className=""></div>
            <div className="">
              <Button type="submit">Commander</Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
