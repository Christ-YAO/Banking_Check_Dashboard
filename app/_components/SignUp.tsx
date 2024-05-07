"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast"

const formSchema = z.object({
  username: z
    .string()
    .min(2, { message: "Ce champ doit contenir au moins 2 caractères." }),
  firstname: z
    .string()
    .min(2, { message: "Ce champ doit contenir au moins 2 caractères." }),
  email: z
    .string()
    .min(6, { message: "Ce champ doit contenir au moins 6  caractères" })
    .email("Cette adresse n'est pas valide."),
  account: z
    .string()
    .min(27, { message: "Ce champ doit contenir au moins 27 caractères." }),
  password: z.string().min(4, {
    message: "Ce champ doit contenir au moins 4 caractères.",
  }),
});

const formSchemaSignIin = z.object({
  account: z
    .string()
    .min(27, { message: "Ce champ doit contenir au moins 27 caractères." }),
  password: z.string().min(4, {
    message: "Ce champ doit contenir au moins 4 caractères.",
  }),
});

export function SignUp() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      firstname: "",
      email: "",
      account: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    toast({
      title: "BRAVO!",
      description: "Inscription réussie.",
    });
    setTimeout(() => {
      location.href = "http://localhost:3000/dashboard";
    }, 2000)
  }

  // 1. Define your form.
  const SignInForm = useForm<z.infer<typeof formSchemaSignIin>>({
    resolver: zodResolver(formSchemaSignIin),
    defaultValues: {
      account: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  function onSignInSubmit(values: z.infer<typeof formSchemaSignIin>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    toast({
      title: "BRAVO!",
      description: "Connexion réussie.",
    });
    
    setTimeout(() => {
      location.href = "http://localhost:3000/dashboard";
    }, 2000)
  }

  return (
    <Tabs defaultValue="account" className="w-[500px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">S&apos;inscrire</TabsTrigger>
        <TabsTrigger value="password">Se connecter</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card className="">
          <CardHeader>
            <CardTitle className="mb-2">INSCRIPTION</CardTitle>
            <CardDescription>
              Prenez le temps de bien vérifier vos informations avant de
              soumettre votre inscription.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-2"
              >
                <div className=" flex gap-4">
                  <div className="flex-1">
                    <FormField
                      control={form.control}
                      name="username"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nom</FormLabel>
                          <FormControl>
                            <Input placeholder="Ex: Doe" {...field} />
                          </FormControl>
                          {/* <FormDescription>
                    This is your public display name.
                  </FormDescription> */}
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="flex-1">
                    <FormField
                      control={form.control}
                      name="firstname"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Prénom(s)</FormLabel>
                          <FormControl>
                            <Input placeholder="Ex: John" {...field} />
                          </FormControl>
                          {/* <FormDescription>
                    This is your public display name.
                  </FormDescription> */}
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Ex: example@example.com"
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
                  name="account"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Numéro de compte</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Ex: FR7630001007941234567890185"
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
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Mot de passe</FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="Mot de passe"
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
                <div className=""></div>
                <Link
                  href={"/"}
                  className="text-xs hover:underline text-muted-foreground"
                >
                  Mot de passe oublié ?
                </Link>
                <div>
                  <Button type="submit">S&apos;inscrire</Button>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card className="">
          <CardHeader>
            <CardTitle className="mb-2">CONNEXION</CardTitle>
            <CardDescription>
              Entrez vos informations de connecter.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...SignInForm}>
              <form
                onSubmit={SignInForm.handleSubmit(onSignInSubmit)}
                className="space-y-4"
              >
                <FormField
                  control={SignInForm.control}
                  name="account"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Numéro de compte</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Ex: FR7630001007941234567890185"
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
                  control={SignInForm.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Mot de passe</FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="Mot de passe"
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
                <div className=""></div>
                <Link
                  href={"/"}
                  className="text-xs hover:underline text-muted-foreground"
                >
                  Mot de passe oublié ?
                </Link>
                <div>
                  <Button type="submit">Se connecter</Button>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
