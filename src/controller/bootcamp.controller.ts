import { Controller, Get , Param , Post, Put, Delete } from '@nestjs/common';

@Controller('bootcamp')
export class BootcampController {

    @Get()
    getAllBootcamps():string{
    return "aqui se mostraran todos los bootcamps"
    }

    @Get(":id")
    getAllBootcampsById(@Param('id') id:string): string {
        return 'aqui se va a mostrar el bootcampcon id ${id}'
    }

    @Post()
    getAllBootcamp(): string {
        return "aqui se van a crear bootcamps";
    }

    @Put(":id")
    upsatebootcamp(@Param('id') id: string) : string {
        return `aqui se va actualizar el bootcamp: ${id}`
    }

    @Delete(":id")
    deleteBootcamp(@Param('id') id:string) : string {
        return `aqui se va a eliminar el bootcamp: ${id}`
    }
}
