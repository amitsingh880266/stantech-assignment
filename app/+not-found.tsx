import { Stack } from "expo-router";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Oops!" }} />
      <div>
        <h1>404</h1>
        <p>Page not found.</p>
      </div>
    </>
  );
}
