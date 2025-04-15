import {
    HStack,
    Icon,
    RadioCardItem,
    RadioCardItemControl,
    RadioCardItemHiddenInput,
    RadioCardItemIndicator,
    RadioCardItemText,
    RadioCardLabel,
    RadioCardRoot
} from "@chakra-ui/react";
import { ReactNode } from "react";
export interface childProps {
    radioId: string;
    icon: ReactNode;
    value: string;
    title: string;
}

interface RadioCardProps {
    items: childProps[];
    label: string;
    id:string
}
function RadioCard({ items, label,id}: RadioCardProps) {
    return (
        <RadioCardRoot orientation="vertical" align="center" defaultValue={id} marginBottom={'80px'}>
            <RadioCardLabel marginBottom={'20px'} fontSize={'18px'}>{label}</RadioCardLabel>
            <HStack align="stretch">
                {items.map((item) => (
                    <RadioCardItem key={item.radioId} value={item.radioId}>
                        <RadioCardItemHiddenInput />
                        <RadioCardItemControl>
                            <Icon fontSize="2xl" color="fg.muted" mb="2">
                                {item.icon}
                            </Icon>
                            <RadioCardItemText>{item.title}</RadioCardItemText>
                            <RadioCardItemIndicator />
                        </RadioCardItemControl>
                    </RadioCardItem>
                ))}
            </HStack>
        </RadioCardRoot>
    );
}

export default RadioCard;
