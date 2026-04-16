"use client"

import * as React from "react"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Field, FieldGroup } from "@/components/ui/field"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@/components/ui/input-group"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "@/components/ui/item"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import { CopyIcon, WarningCircleIcon, TrashIcon, ShareIcon, BagIcon, DotsThreeIcon, SpinnerIcon, PlusIcon, MinusIcon, ArrowLeftIcon, ArrowRightIcon, CheckIcon, CaretDownIcon, CaretRightIcon, MagnifyingGlassIcon, GearIcon, CaretUpIcon } from "@phosphor-icons/react"

export function Demo() {
  const [sliderValue, setSliderValue] = React.useState<number[]>([500])
  const handleSliderValueChange = React.useCallback(
    (value: number | readonly number[]) => {
      if (typeof value === "number") {
        setSliderValue([value])
      } else {
        setSliderValue([...value])
      }
    },
    []
  )

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-muted p-4 sm:p-6 lg:p-12 dark:bg-background">
      <div className="grid max-w-3xl gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Visão geral do estilo</CardTitle>
              <CardDescription className="line-clamp-2">
                Uma prévia dos estilos de tipografia e da paleta de cores.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-6 gap-3">
                {[
                  "--background",
                  "--foreground",
                  "--primary",
                  "--secondary",
                  "--muted",
                  "--accent",
                  "--border",
                  "--chart-1",
                  "--chart-2",
                  "--chart-3",
                  "--chart-4",
                  "--chart-5",
                ].map((variant) => (
                  <div
                    key={variant}
                    className="flex flex-col flex-wrap items-center gap-2"
                  >
                    <div
                      className="relative aspect-square w-full rounded-lg bg-(--color) after:absolute after:inset-0 after:rounded-lg after:border after:border-border after:mix-blend-darken dark:after:mix-blend-lighten"
                      style={
                        {
                          "--color": `var(${variant})`,
                        } as React.CSSProperties
                      }
                    />
                    <div className="hidden max-w-14 truncate font-mono text-[0.60rem] md:block">
                      {variant}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <div className="grid grid-cols-8 place-items-center gap-4">
                <Card className="flex size-8 items-center justify-center rounded-md p-0 ring ring-border *:[svg]:size-4">
                  <CopyIcon
                  />
                </Card>
                <Card className="flex size-8 items-center justify-center rounded-md p-0 ring ring-border *:[svg]:size-4">
                  <WarningCircleIcon
                  />
                </Card>
                <Card className="flex size-8 items-center justify-center rounded-md p-0 ring ring-border *:[svg]:size-4">
                  <TrashIcon
                  />
                </Card>
                <Card className="flex size-8 items-center justify-center rounded-md p-0 ring ring-border *:[svg]:size-4">
                  <ShareIcon
                  />
                </Card>
                <Card className="flex size-8 items-center justify-center rounded-md p-0 ring ring-border *:[svg]:size-4">
                  <BagIcon
                  />
                </Card>
                <Card className="flex size-8 items-center justify-center rounded-md p-0 ring ring-border *:[svg]:size-4">
                  <DotsThreeIcon
                  />
                </Card>
                <Card className="flex size-8 items-center justify-center rounded-md p-0 ring ring-border *:[svg]:size-4">
                  <SpinnerIcon
                  />
                </Card>
                <Card className="flex size-8 items-center justify-center rounded-md p-0 ring ring-border *:[svg]:size-4">
                  <PlusIcon
                  />
                </Card>
                <Card className="flex size-8 items-center justify-center rounded-md p-0 ring ring-border *:[svg]:size-4">
                  <MinusIcon
                  />
                </Card>
                <Card className="flex size-8 items-center justify-center rounded-md p-0 ring ring-border *:[svg]:size-4">
                  <ArrowLeftIcon
                  />
                </Card>
                <Card className="flex size-8 items-center justify-center rounded-md p-0 ring ring-border *:[svg]:size-4">
                  <ArrowRightIcon
                  />
                </Card>
                <Card className="flex size-8 items-center justify-center rounded-md p-0 ring ring-border *:[svg]:size-4">
                  <CheckIcon
                  />
                </Card>
                <Card className="flex size-8 items-center justify-center rounded-md p-0 ring ring-border *:[svg]:size-4">
                  <CaretDownIcon
                  />
                </Card>
                <Card className="flex size-8 items-center justify-center rounded-md p-0 ring ring-border *:[svg]:size-4">
                  <CaretRightIcon
                  />
                </Card>
                <Card className="flex size-8 items-center justify-center rounded-md p-0 ring ring-border *:[svg]:size-4">
                  <MagnifyingGlassIcon
                  />
                </Card>
                <Card className="flex size-8 items-center justify-center rounded-md p-0 ring ring-border *:[svg]:size-4">
                  <GearIcon
                  />
                </Card>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="flex flex-col gap-4">
          <Card className="w-full">
            <CardContent className="flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                <div className="flex flex-wrap gap-2">
                  <Button>Botão</Button>
                  <Button variant="secondary">Secundário</Button>
                  <Button variant="outline">Contorno</Button>
                  <Button variant="ghost">Fantasma</Button>
                </div>
                <Item variant="outline">
                  <ItemContent>
                    <ItemTitle>Autenticação em duas etapas</ItemTitle>
                    <ItemDescription className="text-pretty xl:hidden 2xl:block">
                      Verificação por e-mail ou telefone.
                    </ItemDescription>
                  </ItemContent>
                  <ItemActions className="hidden md:flex">
                    <Button size="sm" variant="secondary">
                      Ativar
                    </Button>
                  </ItemActions>
                </Item>
              </div>
              <Slider
                value={sliderValue}
                onValueChange={handleSliderValueChange}
                max={1000}
                min={0}
                step={10}
                className="flex-1"
                aria-label="Controle deslizante"
              />
              <FieldGroup>
                <Field>
                  <InputGroup>
                    <InputGroupInput placeholder="Nome" />
                    <InputGroupAddon align="inline-end">
                      <InputGroupText>
                        <MagnifyingGlassIcon
                        />
                      </InputGroupText>
                    </InputGroupAddon>
                  </InputGroup>
                </Field>
                <Field className="flex-1">
                  <Textarea placeholder="Mensagem" className="resize-none" />
                </Field>
              </FieldGroup>
              <div className="flex items-center gap-2">
                <div className="flex gap-2">
                  <Badge>Selo</Badge>
                  <Badge variant="secondary">Secundário</Badge>
                  <Badge variant="outline">Contorno</Badge>
                </div>
                <RadioGroup
                  defaultValue="apple"
                  className="ml-auto flex w-fit gap-3"
                >
                  <RadioGroupItem value="apple" />
                  <RadioGroupItem value="banana" />
                </RadioGroup>
                <div className="flex gap-3">
                  <Checkbox defaultChecked />
                  <Checkbox />
                </div>
              </div>
              <div className="flex items-center gap-4">
                <AlertDialog>
                  <AlertDialogTrigger render={<Button variant="outline" />}>
                    <span className="hidden md:block">Alerta</span>
                    <span className="block md:hidden">Alerta</span>
                  </AlertDialogTrigger>
                  <AlertDialogContent size="sm">
                    <AlertDialogHeader>
                      <AlertDialogTitle>
                        Permitir que o acessório conecte?
                      </AlertDialogTitle>
                      <AlertDialogDescription>
                        Você quer permitir que o acessório USB conecte a este
                        dispositivo e acesse seus dados?
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Não permitir</AlertDialogCancel>
                      <AlertDialogAction>Permitir</AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
                <ButtonGroup>
                  <Button variant="outline">Grupo de botões</Button>
                  <DropdownMenu>
                    <DropdownMenuTrigger
                      render={<Button variant="outline" size="icon" />}
                    >
                      <CaretUpIcon
                      />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      align="end"
                      side="top"
                      className="w-fit"
                    >
                      <DropdownMenuGroup>
                        <DropdownMenuLabel>Ações rápidas</DropdownMenuLabel>
                        <DropdownMenuItem>Silenciar conversa</DropdownMenuItem>
                        <DropdownMenuItem>Marcar como lida</DropdownMenuItem>
                        <DropdownMenuItem>Bloquear usuário</DropdownMenuItem>
                      </DropdownMenuGroup>
                      <DropdownMenuSeparator />
                      <DropdownMenuGroup>
                        <DropdownMenuLabel>Conversa</DropdownMenuLabel>
                        <DropdownMenuItem>Compartilhar conversa</DropdownMenuItem>
                        <DropdownMenuItem>Copiar conversa</DropdownMenuItem>
                        <DropdownMenuItem>Denunciar conversa</DropdownMenuItem>
                      </DropdownMenuGroup>
                      <DropdownMenuSeparator />
                      <DropdownMenuGroup>
                        <DropdownMenuItem variant="destructive">
                          Excluir conversa
                        </DropdownMenuItem>
                      </DropdownMenuGroup>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </ButtonGroup>
                <Switch defaultChecked className="ml-auto" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
