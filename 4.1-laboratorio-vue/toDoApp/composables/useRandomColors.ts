const colors = [
  '#FEC5BB',
  '#FCD5CE',
  '#fff4f0',
  '#f3f3f3',
  '#feebd6',
  '#ECE4DB',
  '#FFE5D9',
  '#FFD7BA',
  '#FEC89A',
]

export const useRandomColors = () => {
  const getRandomColor = (): string =>
    colors[Math.floor(Math.random() * colors.length)]

  return { getRandomColor }
}
