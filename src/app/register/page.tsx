import React from "react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Label } from "@radix-ui/react-label";
import { Input } from "../../components/ui/input";
import Link from "next/link";

const Register = () => {
  return (
    <section className="container mx-auto mt-10 flex justify-center">
      <Card className="w-full max-w-sm md:max-w-md lg:max-w-lg shadow-md">
        <CardHeader>
          <CardTitle>Create an account</CardTitle>
          <CardDescription>
            Enter your details below to register a new account
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="name">Name: </Label>
              <Input
                id="name"
                type="text"
                placeholder="John Doe"
                required
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="email">Email:</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="password">Password:</Label>
              <Input id="password" type="password" required />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="confirm-password">Confirm Password:</Label>
              <Input id="confirm-password" type="password" required />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="confirm-password">Phone:</Label>
              <Input id="confirm-password" type="tel" required />
            </div>

            <Button type="submit" className="w-full">
              Register
            </Button>
          </form>
        </CardContent>

        <CardFooter className="flex-col gap-3">
          <Button variant="outline" className="w-full">
            Register with Google
          </Button>
          <p className="text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link href="/login" className="underline hover:text-primary">
              Login here
            </Link>
          </p>
        </CardFooter>
      </Card>
    </section>
  );
};

export default Register;
