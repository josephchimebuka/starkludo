// import React, { CSSProperties, ReactNode } from "react";
// import HighlightedDiv from "./HighligtedDiv";

// interface PathTileProps {
//     style?: CSSProperties;
//     className?: string;
//     bgColor?: string;
//     borderColor?: string;
//     children?: ReactNode;
//     highlighted?: boolean;
// }

// const PathTile: React.FC<PathTileProps> = ({
//     style,
//     className,
//     bgColor,
//     borderColor = "#5cd7f8s",
//     children,
//     highlighted,

// }) => {
//     return (
//         // <div
//         //     className={`${className} flex w items-center border-none justify-center transition-all duration-300 hover:brightness-[1.2] ${highlighted ? "brightness-[1.2]" : "brightness-[0.7]"
//         //         }`}
//         //     style={{
//         //         ...style,
//         //         backgroundColor: bgColor || "transparent",
//         //         borderColor,
//         //         borderWidth: "0.01px",
//         //         borderStyle: "solid",
//         //         cursor: "pointer",
//         //     }}
//         // >
//         //     {childr
//         // 
//         // <dien}
//         // </div>
//         <HighlightedDiv className={`${className} bg-[${bgColor}] border h-2/4`} ></HighlightedDiv>
//     );
// };

// export default PathTile;



import React, { CSSProperties, ReactNode } from "react";

interface PathTileProps {
    style?: CSSProperties;
    className?: string;
    bgColor?: string;
    borderColor?: string;
    children?: ReactNode;
    highlighted?: boolean;
    piece?: {
        color: string; // The color or visual identifier of the piece
        playerId: number; // To identify which player's piece it is
    };
}

const PathTile: React.FC<PathTileProps> = ({
    style,
    className = "",
    bgColor = "transparent",
    borderColor = "#5cd7f8",
    children,
    piece,
    highlighted = false,

}) => {
    return (
        <div
            className={`flex items-center justify-center border-none transition-all duration-300 ${highlighted ? "brightness-125" : "brightness-75"
                } ${className}`}
            style={{
                ...style,
                backgroundColor: bgColor,
                borderColor: borderColor,
                borderWidth: ".1px",
                borderStyle: "solid",
                cursor: "pointer",
            }}
        >
            {/* {children} */}
            {piece && (
                <div
                    className="w-6 h-6 rounded-full"
                    style={{ backgroundColor: piece.color }}
                    title={`Player ${piece.playerId}'s piece`}
                ></div>
            )}
        </div>
    );
};

export default PathTile;
// import React from "react";

// interface PathTileProps {
//     highlighted?: boolean;
//     bgColor?: string;
//     borderColor?: string;
//     piece?: {
//         color: string; // The color or visual identifier of the piece
//         playerId: number; // To identify which player's piece it is
//     };
// }

// const PathTile: React.FC<PathTileProps> = ({
//     highlighted = false,
//     bgColor = "transparent",
//     borderColor = "#5cd7f8",
//     piece,
// }) => {
//     return (
//         <div
//             className={`relative flex items-center justify-center border transition-all duration-300 ${
//                 highlighted ? "brightness-125" : "brightness-75"
//             }`}
//             style={{
//                 backgroundColor: bgColor,
//                 borderColor: borderColor,
//                 borderWidth: "2px",
//                 borderStyle: "solid",
//                 width: "40px",
//                 height: "40px",
//             }}
//         >
//             {/* Render player piece if present */}
//             {piece && (
//                 <div
//                     className="w-6 h-6 rounded-full"
//                     style={{ backgroundColor: piece.color }}
//                     title={`Player ${piece.playerId}'s piece`}
//                 ></div>
//             )}
//         </div>
//     );
// };

// export default PathTile;
