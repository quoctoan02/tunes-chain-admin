import { FC, memo } from "react";

import type { AvatarProps } from "antd";
import { Avatar as AntdAvatar } from "antd";


type Props = AvatarProps & {
    name?: string;
};

const AvatarComponent: FC<Props> = ({ name = "", style, ...rest }) => {
    return (
        <AntdAvatar
            alt={name}
            size="small"
            style={{
                backgroundColor: rest?.src
                    ? "transparent"
                    : "#737373",
                display: "flex",
                alignItems: "center",
                border: "none",
                ...style,
            }}
            {...rest}
        >
            Admin
        </AntdAvatar>
    );
};

export const CustomAvatar = memo(
    AvatarComponent,
    (prevProps, nextProps) => {
        return prevProps.name === nextProps.name && prevProps.src === nextProps.src;
    },
);
