import * as Tooltip from "@radix-ui/react-tooltip";
import { styled } from "../stitches.config";

export function TooltipComponent({
  content,
  children,
}: {
  content: string;
  children: React.ReactNode;
}) {
  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <StyledTooltipTrigger>{children}</StyledTooltipTrigger>
        <Tooltip.Portal>
          <StyledTooltipContent>
            {content}
            <StyledTooltipArrow />
          </StyledTooltipContent>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}

const StyledTooltipTrigger = styled(Tooltip.Trigger, {
  all: "unset",
  cursor: "pointer",
});

const StyledTooltipContent = styled(Tooltip.Content, {
  backgroundColor: "$secondaryBackground",
  color: "$primaryText",
  padding: "10px 15px",
  borderRadius: "5px",
  zIndex: "$tooltip",
  border: "1px solid $border",
});

const StyledTooltipArrow = styled(Tooltip.Arrow, {
  fill: "$secondaryBackground",
  stroke: "$border",
});
