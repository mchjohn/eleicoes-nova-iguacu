import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";

interface HeaderProps {
  title: number;
  content?: number;
  description: string;
}

export function Header({ title, content, description }: HeaderProps) {
  const value_percent = () => {
    if (content === undefined) {
      return '';
    } else if (isNaN(content)) {
      return '0.0%';
    } else if (content >= 10) {
      return content.toFixed(1) + '%';
    } else {
      return content + '%';
    }
  }

  return (
    <>
      <CardHeader className="pb-2">
        <CardDescription>{description}</CardDescription>
        <CardTitle className="text-4xl text-orange-500">{title}</CardTitle>
      </CardHeader>

        <CardContent>
          <div className="text-xs text-muted-foreground">
            {value_percent()}
          </div>
        </CardContent>
    </>
  )
}
