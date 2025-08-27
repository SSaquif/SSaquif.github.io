import * as RadixTooltip from "@radix-ui/react-tooltip";
import { styled, darkTheme } from "../stitches.config";
import { useSiteState } from "../context/SiteStateContext";

export function Tooltip({
  content,
  children,
}: {
  content: string;
  children: React.ReactNode;
}) {
  const { darkMode } = useSiteState();

  return (
    <RadixTooltip.Provider>
      <RadixTooltip.Root>
        <StyledTooltipTrigger>{children}</StyledTooltipTrigger>
        <RadixTooltip.Portal>
          <StyledTooltipContent className={darkMode ? darkTheme.className : ""}>
            {content}
            <StyledTooltipArrow
              className={darkMode ? darkTheme.className : ""}
            />
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
  fill: "$border",
  stroke: "$border",
});
