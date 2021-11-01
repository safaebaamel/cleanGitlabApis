import { HttpService } from '@nestjs/axios';
import { Controller, Post, Get, Put, Delete, Param, Body } from '@nestjs/common';
import { ApiForbiddenResponse, ApiHeader, ApiOkResponse, ApiOperation, ApiProperty, ApiResponse, ApiTags, ApiUnauthorizedResponse } from '@nestjs/swagger';
import { Observable } from 'rxjs';
import { createIssueDto } from '../dto/createIssue.dto';
import { AxiosResponse } from 'axios'
import { editIssueDto } from '../dto/editIssue.dto';
import { labelParamsDto } from '../dto/labelParams.dto';
import { createLabelDto } from '../dto/createLabel.dto';
import { editLabelDto } from '../dto/editLabel.dto';
import { createProjectDto } from '../dto/createProject.dto';
import { commentIssueDto } from '../dto/commentIssue.dto';
import { commentsParams } from '../dto/commentsParams.dto';

@ApiHeader({name: 'PRIVATE-TOKEN'})
@ApiTags('Gitlab Apis')
@ApiResponse({status: 401, description:'Unauthorized'})
@ApiResponse({status: 403, description:'Forbidden'})
@ApiResponse({status: 200, description:'Done'})
@ApiResponse({status: 201, description:'Created Successfuly'})
@ApiResponse({status: 202, description:'Accepted'})
@ApiResponse({status: 204, description:'No Content'})
@ApiResponse({status: 205, description:'Reset Content'})
@ApiForbiddenResponse({ description: 'Forbidden' })
@ApiUnauthorizedResponse({ description: 'Invalid Credentials' })
@Controller('projects')
export class GitlabController {

    constructor(private httpService: HttpService){}

    // Projects
    // @ApiOperation({ description: "Get all projects", summary: 'Get all projects' })
    // @ApiOkResponse({ description: 'projects were been shown' })
    // @Get()
    // root(): Observable<AxiosResponse<any>> {
    //     return this.httpService.get('')
    // }
    
    @ApiOperation({ description: "Get a project by Id", summary: 'Get a project by Id' })
    @ApiOkResponse({ description: 'project has been shown' })
    @Get(':id')
    getById(@Param('id') id: string): Observable<AxiosResponse<any>> {
        return this.httpService.get(id);
    }
    
    @ApiOperation({ description: "Add a project", summary: 'Add a project'})
    @ApiOkResponse({description: 'Project Added'})
    @Post()
    addProject(@Body() project: createProjectDto): Observable<AxiosResponse<createProjectDto>> {
        return this.httpService.post(String(project))
    }

    @ApiOperation({ description: "Edit a project", summary: 'Edit a project'})
    @ApiOkResponse({description: 'Project Edited'})
    @Put(':id')
    editProject(@Param('id') id:string, @Body() project: createProjectDto ): Observable<AxiosResponse<createProjectDto>> {
        return this.httpService.put(id, project)
    }

    @ApiOperation({ description: "Delete a project", summary: 'Delete a project'})
    @ApiOkResponse({description: 'Project Deleted'})
    @Delete(':id')
    deleteProject(@Param('id') id:string): Observable<AxiosResponse<any>> {
        return this.httpService.delete(id)
    }

    @ApiOperation({description: 'Upload a file', summary: 'Upload a file'})
    @ApiOkResponse({description: 'Upload a file'})
    @Post(':id')
    uploadfiles(@Param('id') id:string): Observable<AxiosResponse<any>> {
        return this.httpService.post(String(id))
    }

    // Issues
    @Get(':id/issues')
    @ApiOperation({ description: "list issues", summary: 'List issues' })
    @ApiOkResponse({ description: "Issues Listed successfully" })
    listIssues(@Param('id') id:string): Observable<AxiosResponse<any>> {
        return this.httpService.get(id)
    }

    @Post(':id/issues')
    @ApiOperation({ description: "create issue", summary: 'create issue' })
    @ApiOkResponse({ description: 'issue created' })
    createIssue(@Param('id') id: string ,@Body() issue: createIssueDto): Observable<AxiosResponse<createIssueDto>> {
        return  this.httpService.post(id, issue);
    }

    @ApiOperation({ description: "Edit an issue", summary: 'Edit an issue' })
    @ApiOkResponse({ description: 'Edit an issue' })
    @Put(':id/issues/:issue_iid')
    editIssue(@Param() params: editIssueDto,@Body() issue: createIssueDto): Observable<AxiosResponse<createIssueDto>>  {
        return this.httpService.put(String(params) ,issue);
    }

    @ApiOperation({ description: "Delete an issue", summary: 'Delete an issue' })
    @ApiOkResponse({ description: 'Delete an issue' })
    @Delete(':id/issues/:issue_iid')
    deleteIssue(@Param() params: editIssueDto): Observable<AxiosResponse<any>> {
        return this.httpService.delete(String(params))
    }

    // Comment on Issues 

    @ApiOperation({ description: "Comment on issue", summary: 'Comment on issue' })
    @ApiOkResponse({ description: 'Comment on issue' })
    @Post(':id/issues/:issue_iid/notes')
    commentOnIssue(@Param() params: commentsParams,@Body() comment: commentIssueDto): Observable<AxiosResponse<commentIssueDto>> {
        return this.httpService.post(String(params), comment)
    }

    @ApiOperation({ description: "Get All comments in an Issue", summary: "Get All comments in an Issue" })
    @ApiOkResponse({ description: 'Get All comments in an Issue' })
    @Get(':id/issues/:issue_iid/notes')
    getAllcommentsInIssue(@Param() params: commentsParams): Observable<AxiosResponse<commentIssueDto>> {
        return this.httpService.get(String(params));
    }

    // Labels
    @ApiOperation({ description: "List Labels", summary: 'List Labels' })
    @ApiOkResponse({ description: 'List Labels' })
    @Get(':id/labels')
    getLabels(@Param('id') id: string):  Observable<AxiosResponse<any>> {
        return this.httpService.get(id)
    }

    @ApiOperation({ description: "Get a single project label", summary: 'Get a single project label' })
    @ApiOkResponse({ description: 'Get a single project label' })
    @Get(':id/labels/:label_id')
    getLabelById(@Param() params: labelParamsDto):  Observable<AxiosResponse<any>> {
        return this.httpService.get(String(params))
    }

    @ApiOperation({ description: "Create a new label", summary: 'Create a new label' })
    @ApiOkResponse({ description: 'Create a new label' })
    @Post(':id/labels')
    addLabel(@Param('id') id:string ,@Body() params: createLabelDto):  Observable<AxiosResponse<createLabelDto>> {
        return this.httpService.post(id, String(params))
    }

    @ApiOperation({ description: "Edit an existing label", summary: 'Edit an existing label' })
    @ApiOkResponse({ description: 'Edit an existing label' })
    @Put(':id/labels/:label_id')
    editLabel(@Param() params: labelParamsDto ,@Body() param: editLabelDto):  Observable<AxiosResponse<editIssueDto>> {
        return this.httpService.post(String(params), param )
    }

    @ApiOperation({ description: "Delete an existing label", summary: 'delete an existing label' })
    @ApiOkResponse({ description: 'delete an existing label'})
    @Delete(':id/labels/:label_id')
    deleteLabel(@Param() params: labelParamsDto):  Observable<AxiosResponse<any>> {
        return this.httpService.delete(String(params))
    }


}
