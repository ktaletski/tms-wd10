import { ComponentType, CSSProperties, FC, PropsWithChildren } from "react";

interface PropsWithStyle {
  style?: CSSProperties;
}

/** Higher order component */
function withRedText<P extends PropsWithStyle>(
  Component: ComponentType<P>,
): ComponentType<P> {
  return (props) => {
    const style = { color: "red" };
    return <Component {...props} style={{ ...style, ...props.style }} />;
  };
}

const Button: FC<PropsWithChildren<PropsWithStyle>> = (props) => (
  <button {...props} />
);
const Text: FC<PropsWithChildren<PropsWithStyle>> = (props) => <p {...props} />;

const StyledButton = withRedText(Button);
const StyledText = withRedText(Text);

export const App: FC = () => {
  return (
    <div>
      <Button>I am not styled :(</Button>
      <Text>I am not styled :(</Text>
      <br />
      <br />
      <StyledButton>I am styled!</StyledButton>
      <StyledText>I am styled!</StyledText>
    </div>
  );
};
