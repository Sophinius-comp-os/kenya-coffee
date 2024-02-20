
import React from "react";

export type FromStepProps = {
    onNext(): void;
    onPrevious(): void;
};
export type FormStepComponentType = React.FunctionComponent<FromStepProps>;