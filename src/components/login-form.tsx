"use client"

import * as React from "react"
import { EyeIcon, EyeSlashIcon } from "@phosphor-icons/react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Field,
  FieldGroup,
} from "@/components/ui/field"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group"
import { Input } from "@/components/ui/input"
import { HalftoneCmyk } from "@paper-design/shaders-react"

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [showPassword, setShowPassword] = React.useState(false)

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="overflow-hidden p-0">
        <CardContent className="grid min-h-[600px] p-0 md:grid-cols-2">
          <form className="flex flex-col justify-center p-6 md:p-10">
            <FieldGroup className="mx-auto w-full max-w-sm gap-6">
              <div className="flex flex-col gap-2 text-center">
                <h1 className="text-3xl font-semibold tracking-tight">Bem-vindo de volta</h1>
                <p className="text-balance text-sm text-muted-foreground">
                  Acesse sua conta ou{" "}
                  <Button
                    variant="link"
                    type="button"
                    className="h-auto p-0 align-baseline font-medium text-muted-foreground underline-offset-2"
                  >
                    Cadastre-se
                  </Button>
                </p>
              </div>

              <div className="grid gap-3">
                <Field>
                  <Input id="email" type="email" placeholder="Email" required />
                </Field>

                <Field>
                  <InputGroup>
                    <InputGroupInput
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Senha"
                      required
                    />
                    <InputGroupAddon align="inline-end">
                      <InputGroupButton
                        onClick={() => setShowPassword((v) => !v)}
                        aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
                      >
                        {showPassword ? <EyeSlashIcon /> : <EyeIcon />}
                      </InputGroupButton>
                    </InputGroupAddon>
                  </InputGroup>
                </Field>
              </div>

              <Field className="pt-2">
                <Button type="submit" size="lg" className="w-full">
                  Entrar
                </Button>
              </Field>

              <div className="-mt-1 text-center">
                <a href="#" className="text-sm underline-offset-2 hover:underline">
                  Esqueceu sua senha?
                </a>
              </div>
            </FieldGroup>
          </form>
          <div className="relative hidden border-l md:block">
            <HalftoneCmyk
              size={0.01}
              gridNoise={0.6}
              type="dots"
              softness={0.2}
              contrast={2}
              gainC={-0.17}
              gainM={-0.45}
              gainY={-0.45}
              gainK={0}
              floodC={0}
              floodM={0}
              floodY={0}
              floodK={0.1}
              scale={1}
              image="/pickleball.jpg"
              grainSize={0}
              fit="cover"
              grainOverlay={0.2}
              colorBack="#F2F1E8"
              colorC="#7A7A75"
              colorM="#7A7A75"
              colorY="#7A7A75"
              colorK="#231F20"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
