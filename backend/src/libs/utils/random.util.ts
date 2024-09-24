export function generateRandomGradientAvatar(): string {
  const gradients = [
      'linear-gradient(45deg, #FF9A8B 0%, #FF6A88 55%, #FF99AC 100%)',
      'linear-gradient(45deg, #A1C4FD 0%, #C2E9FB 100%)',
      'linear-gradient(45deg, #f5f7fa 0%, #c3cfe2 100%)',
      'linear-gradient(45deg, #667eea 0%, #764ba2 100%)',
  ];
  const randomIndex = Math.floor(Math.random() * gradients.length);
  return gradients[randomIndex];
}