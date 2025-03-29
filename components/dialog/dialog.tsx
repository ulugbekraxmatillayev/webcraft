import React, { JSX, ReactNode, useRef, useState } from 'react'
import { Button, Dialog, Field, Input, Portal, Stack } from "@chakra-ui/react"

type FormDialogProps = {
    children: ReactNode
}
function FormDialog({children}:FormDialogProps): JSX.Element {
    const ref = useRef<HTMLInputElement>(null)
    const [phoneCode, setPhoneCode] = useState('+998')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value;

        if (!value.startsWith("+998")) {
            value = "+998"; 
        }
        value = value.replace(/[^0-9+]/g, "");
        setPhoneCode(value);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (phoneCode.length <= 4 && e.key === "Backspace") {
            e.preventDefault(); 
        }
        if (e.key.length === 1 && !/[0-9]/.test(e.key)) {
            e.preventDefault();
        }
    };
    return (
        <Dialog.Root initialFocusEl={() => ref.current}>
            <Dialog.Trigger asChild>
                {children}
            </Dialog.Trigger>
            <Portal>
                <Dialog.Backdrop />
                <Dialog.Positioner>
                    <Dialog.Content>
                        <Dialog.Header>
                            <Dialog.Title>Mutaxassis bilan bog'lanish</Dialog.Title>
                        </Dialog.Header>
                        <Dialog.Body pb="4">
                            <Stack gap="4">
                                <Field.Root>
                                    <Field.Label>Ism</Field.Label>
                                    <Input placeholder="Ism Familiya" />
                                </Field.Root>
                                <Field.Root>
                                    <Field.Label>Kompaniya nomi</Field.Label>
                                    <Input placeholder="Kompaniya" />
                                </Field.Root>
                                <Field.Root>
                                    <Field.Label>Telefon raqam</Field.Label>
                                    <Input
                                        type='tel'
                                        ref={ref}
                                        placeholder="+998"
                                        value={phoneCode}
                                        onChange={handleChange}
                                        onKeyDown={handleKeyDown}
                                        maxLength={17}
                                    />
                                </Field.Root>
                            </Stack>
                        </Dialog.Body>
                        <Dialog.Footer>
                            <Dialog.ActionTrigger asChild>
                                <Button variant="outline">Cancel</Button>
                            </Dialog.ActionTrigger>
                            <Button>Save</Button>
                        </Dialog.Footer>
                    </Dialog.Content>
                </Dialog.Positioner>
            </Portal>
        </Dialog.Root>
    )
}

export default FormDialog