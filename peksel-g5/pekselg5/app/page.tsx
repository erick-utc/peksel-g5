'use client'
import React from "react";
import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import {Form, Input, Button, Image} from "@heroui/react";

export default function Home() {
  const [action, setAction] = React.useState<null | string>(null);

  return (
    <section className="flex items-center flex-col">
      <Image
        alt="Peksel G5 Logo"
        src="/img/logo.png"
        width={300}
      />
      <br/>
      <Form
        className="w-full max-w-xs flex flex-col gap-4 h-screen"
        onReset={() => setAction("reset")}
        onSubmit={(e:any) => {
          e.preventDefault();
          let data = Object.fromEntries(new FormData(e.currentTarget));

          setAction(`submit ${JSON.stringify(data)}`);
        }}
      >
        <Input
          isRequired
          errorMessage="Please enter a valid email"
          label="Email"
          labelPlacement="outside"
          name="email"
          placeholder="Enter your email"
          type="email"
        />
        <br/>
        <Input
          isRequired
          errorMessage="Please enter a valid password"
          label="Password"
          labelPlacement="outside"
          name="pass"
          placeholder="Enter your password"
          type="password"
        />
        <br/>
        <div className="flex justify-between w-full m-y-6">
          <Button color="primary" type="submit">
            Entrar
          </Button>
          <Link href="/register">
            Registrarse
          </Link>
        </div>
        {action && (
          <div className="text-small text-default-500">
            Action: <code>{action}</code>
          </div>
        )}
      </Form>
    </section>
  );
}
