import * as RadixTooltip from "@radix-ui/react-tooltip";
import { styled } from "../stitches.config";

export function Tooltip({
  content,
  children,
}: {
  content: string;
  children: React.ReactNode;
}) {
  return (
    <RadixTooltip.Provider>
      <RadixTooltip.Root>
        <StyledTooltipTrigger>{children}</StyledTooltipTrigger>
        <RadixTooltip.Portal>
          <StyledTooltipContent>
            {content}
            <StyledTooltipArrow />
          </StyledTooltipContent>
        </RadixTooltip.Portal>
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  );
}

const StyledTooltipTrigger = styled(RadixTooltip.Trigger, {
  all: "unset",
  cursor: "pointer",
});

const StyledTooltipContent = styled(RadixTooltip.Content, {
  backgroundColor: "$secondaryBackground",
  color: "$primaryText",
  padding: "10px 15px",
  borderRadius: "5px",
  zIndex: "1200",
  border: "1px solid $border",
});

const StyledTooltipArrow = styled(RadixTooltip.Arrow, {
  fill: "$secondaryBackground",
  stroke: "$border",
});
