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
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { CalendarDays, Plus } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { toast } from "@/components/ui/use-toast"

const formSchema = z.object({
  dob: z.date({
    required_error: "Une date est obligatoire.",
  }),
  payeur: z
    .string({
      required_error: "Veuillez saisir un établissement.",
    })
    .min(1, { message: "Ce champ est obligatoire." }),
  emetteur: z
    .string()
    .min(2, { message: "Ce champ doit contenir au moins 2 caractères." }),
  checkNumber: z
    .string()
    .min(7, { message: "Ce champ doit contenir 7 caractères." })
    .max(7, { message: "Ce champ ne doit pas contenir plus de 7 caractères." }),
  checkType: z
    .string({
      required_error: "Veuillez saisir un type de chèque.",
    })
    .min(1, { message: "Ce champ est obligatoire." }),
});

export default function SaveCheckForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      //   dob: null,
      payeur: "",
      emetteur: "",
      checkNumber: "",
      checkType: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    toast({
      title: "BRAVO!",
      description: "Enregistrement réussie.",
    });
    setTimeout(() => {
      location.href = "http://localhost:3000/dashboard/save-check";
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
              name="dob"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Date</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Choisir une date</span>
                          )}
                          <CalendarDays className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) =>
                          date > new Date() || date < new Date("1900-01-01")
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  {/* <FormDescription>
                    Your date of birth is used to calculate your age.
                  </FormDescription> */}
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="payeur"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Etablissement payeur</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Selectionner un établissemnt" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="1">Etablissement N°1</SelectItem>
                      <SelectItem value="2">Etablissement N°2</SelectItem>
                      <SelectItem value="3">Etablissement N°3</SelectItem>
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
              name="emetteur"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Emetteur</FormLabel>
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
              name="checkNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>N° chèque</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Ex: 1836489"
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
              name="checkType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Type chèque</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue
                          className=""
                          placeholder="Selectionner un type de chèque"
                        />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Chéquier classique">
                        Chéquier classique
                      </SelectItem>
                      <SelectItem value="Chéquier portefeuille">
                        Chéquier portefeuille
                      </SelectItem>
                      <SelectItem value="Chéquier Correspondance">
                        Chéquier Correspondance
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
              <Button type="submit">
                <Plus className="w-4 mr-2" />
                Enregistrer
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
