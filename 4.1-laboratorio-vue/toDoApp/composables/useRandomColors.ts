const colors = [
  '#FEC5BB',
  '#FCD5CE',
  '#FAE1DD',
  '#F8EDEB',
  '#E8E8E4',
  '#D8E2DC',
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
