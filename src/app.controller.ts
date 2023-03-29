import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AppService } from './app.service';
import CreateAccountDto from './dto/createaccount.dto';
import CreateOwnerDto from './dto/createowner.dto';
import UpdateAccountDto from './dto/updateaccount.entity';
import UpdateOwnerDto from './dto/updateowner.dto';

@Controller('app')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/accounts')
  createAccount(@Body() createAccountDto: CreateAccountDto) {
    return this.appService.createAccount(createAccountDto);
  }

  @Get('/accounts')
  findAllAccounts() {
    return this.appService.findAllAccounts();
  }

  @Get(':id')
  findOneAccount(@Param('id') id: string) {
    return this.appService.findOneAccount(+id);
  }

  @Patch('/accounts/:id')
  updateAccount(@Param('id') id: string, @Body() updateAccountDto: UpdateAccountDto) {
    return this.appService.updateAccount(+id, updateAccountDto);
  }

  @Delete('/accounts/:id')
  removeAccount(@Param('id') id: string) {
    return this.appService.removeAccount(+id);
  }

  @Post('/owners')
  createOwner(@Body() createOwnertDto: CreateOwnerDto) {
    return this.appService.createOWner(createOwnertDto);
  }

}
