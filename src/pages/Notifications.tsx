export default function Notifications() {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-6 text-center">
      <div className="text-6xl mb-4">🔔</div>
      <h3 className="text-xl font-semibold mb-2">No new notifications</h3>
      <p className="text-muted-foreground">
        When someone likes or comments on your posts, you'll see it here.
      </p>
    </div>
  );
}
