import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card.jsx'
import { Input } from './ui/input.jsx'
import { Textarea } from './ui/textarea.jsx'
import { Button } from './ui/button.jsx'
import { Plus } from 'lucide-react'

function TaskForm() {
  return (
    <Card>
        <CardHeader>
          <CardTitle className="text-lg">Nueva Tarea</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input placeholder="Título" value={title} onChange={(e) => setTitle(e.target.value)} />
          <Textarea
            placeholder="Descripción (opcional)"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={2}
          />
          <Button onClick={addTask} className="w-full">
            <Plus className="mr-2 h-4 w-4" />
            Agregar Tarea
          </Button>
        </CardContent>
      </Card>
  )
}

export default TaskForm